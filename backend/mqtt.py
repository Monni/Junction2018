import json
import random
import sys
import time
import logging

import paho.mqtt.client as Paho
import thread

MQTT_TOPIC_CORE = 'sinful_tinderness_core'
MQTT_TOPIC_BLOCKME = 'sinful_tinderness_core/blockme'
MQTT_TOPIC_SENSOR = 'sinful_tinderness_core/sensor'
MQTT_TOPIC_DOGGY = 'sinful_tinderness_core/doggy'
MQTT_TOPIC_FRONT_INITIAL = 'sinful_tinderness_core/ascendancy'

MQTT_TOPIC = [(MQTT_TOPIC_CORE, 0), (MQTT_TOPIC_BLOCKME, 0), (MQTT_TOPIC_SENSOR, 0), (MQTT_TOPIC_FRONT_INITIAL, 0)]

MQTT_ADDRESS = 'broker.mqttdashboard.com'
MQTT_PORT = 8000
formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')


def setup_logger(name, log_file, level=logging.INFO):
    """Function setup as many loggers as you want"""

    handler = logging.FileHandler(log_file)
    handler.setFormatter(formatter)

    logger = logging.getLogger(name)
    logger.setLevel(level)
    logger.addHandler(handler)

    return logger


logger_msg = setup_logger('mqtt_msg', 'mqtt_messages.log')
logger_ack = setup_logger('mqtt_ack', 'mqtt_ack.log')
logger_doggy = setup_logger('doggy', 'doggy_state.log')


class SensorRecord(object):
    x = 0
    y = 0
    z = 0
    total = 0
    timestamp = ''

    def __init__(self, x=0, y=0, z=0, total=0, timestamp=0):
        self.x = x,
        self.y = y
        self.z = z
        self.total = total
        self.timestamp = timestamp


class SensorDoggyService(object):
    sensor_data = []

    def save_sensor_data(self, data):
        """
        Save sensor data to self.
        """
        sensor_data = {
            'total': data['TotalVec'],
            'timestamp': data['Timestamp'],
            'x': data['ArrayVec']['x'],
            'y': data['ArrayVec']['y'],
            'z': data['ArrayVec']['z']
        }
        if len(self.sensor_data) < 1:
            data_copy = sensor_data.copy()
            data_copy['total'] = 0
            for i in range(20):
                data_copy['timestamp'] -= i * 1000
                self.sensor_data.append(SensorRecord(**data_copy))
        self.sensor_data.append(SensorRecord(**sensor_data))

    def _get_activity_past_minute(self):
        try:
            last_record = self.sensor_data[-1]
        except IndexError:
            return 0

        applicable_records = [record.total for record
                              in self.sensor_data if record.timestamp >= last_record.timestamp - 35000]

        activity = 0.0
        for record in applicable_records:
            activity += record
        return sum(applicable_records) / float(len(applicable_records))

    def get_doggy_will_to_live(self):
        activity_past_minute = self._get_activity_past_minute()
        logger_doggy.info('Activity {}'.format(activity_past_minute))

        if activity_past_minute < 100:
            return 0
        elif activity_past_minute < 150:
            return 1
        elif activity_past_minute < 240:
            return 2
        elif activity_past_minute < 300:
            return 3
        elif activity_past_minute < 350:
            return 4
        else:
            return 5

    def get_steps(self):
        try:
            last_record = self.sensor_data[-1]
        except IndexError:
            return 0

        applicable_records = [record.total for record
                              in self.sensor_data if record.timestamp >= last_record.timestamp - 4000]
        steps = 0.0
        for record in applicable_records:
            steps += record
        return steps/10


class SinfulTinderness(object):

    iteration_count = 13
    service_permissions = {}

    payload = {
        'pie_01': {
            'red': 4000,
            'green': 500
        },
        'pie_02': {
            'red': 50,
            'blue': 50,
            'green': 50
        },
        'line_01': {
            'you': {
                'points': [
                    {'x': 1, 'y': 50},
                    {'x': 2, 'y': 40},
                    {'x': 3, 'y': 25},
                    {'x': 4, 'y': 60},
                    {'x': 5, 'y': 40},
                    {'x': 6, 'y': 20},
                    {'x': 7, 'y': 30},
                    {'x': 8, 'y': 40},
                    {'x': 9, 'y': 35},
                    {'x': 10, 'y': 60},
                    {'x': 11, 'y': 40},
                    {'x': 12, 'y': 35},
                ]
            },
            'opponent': {
                'points': [
                    {'x': 1, 'y': 30},
                    {'x': 2, 'y': 40},
                    {'x': 3, 'y': 40},
                    {'x': 4, 'y': 55},
                    {'x': 5, 'y': 50},
                    {'x': 6, 'y': 60},
                    {'x': 7, 'y': 80},
                    {'x': 8, 'y': 85},
                    {'x': 9, 'y': 70},
                    {'x': 10, 'y': 60},
                    {'x': 11, 'y': 65},
                    {'x': 12, 'y': 70},
                ]
            }
        }
    }

    future_line_01_progress = {
        'you': [
            {'x': 13, 'y': 40},
            {'x': 14, 'y': 50},
        ],
        'opponent': [
            {'x': 13, 'y': 62},
            {'x': 14, 'y': 50},
        ]
    }

    def __init__(self):
        self.client = Paho.Client('jamppajorma_l3kk2lrn3k', transport='websockets')
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.client.on_disconnect = self.on_disconnect
        self.client.connect(MQTT_ADDRESS, MQTT_PORT)
        self.client.loop_start()
        self.client.subscribe(MQTT_TOPIC)

        self.sensor_service = SensorDoggyService()
        try:
            thread.start_new_thread(self._send_doggy_data, ())
        except:  # FIXME broaaaaad.
            raise

    def on_connect(self, *args, **kwargs):
        logger_ack.info('Connected to MQTT')

    @staticmethod
    def on_disconnect(client, userdata, rc):
        logger_ack.critical('Disconnected with reason {}'.format(rc))
        print('Disconnected')

    def on_message(self, client, userdata, message):
        topic = message.topic
        logger_ack.info('Received message on {}'.format(topic))
        logger_msg.info('Received message: {}'.format(message.payload))

        options = {
            MQTT_TOPIC_SENSOR: self._handle_sensor_info,
            MQTT_TOPIC_BLOCKME: self._handle_service_permissions,
            MQTT_TOPIC_FRONT_INITIAL: self._handle_initial_charts_to_front
        }
        try:
            options[topic](message)
        except KeyError:
            pass

    def _handle_initial_charts_to_front(self, message):
        """Send payload as is into front to show charts"""
        self._send()

    def _handle_service_permissions(self, message):
        payload = json.loads(message.payload)
        for key, value in payload.items():
            self.service_permissions[key] = value

    def _handle_sensor_info(self, message):
        payload = json.loads(message.payload)
        self.sensor_service.save_sensor_data(payload)

    def _send(self):
        """
        Send to MQ
        """
        self.client.publish(MQTT_TOPIC_CORE, json.dumps(self.payload))
        logger_ack.info('Published to {}'.format(MQTT_TOPIC_CORE))

    def absolution(self):
        time.sleep(1)
        while True:
            time.sleep(4)

            input_1 = random.randint(0, 3)
            input_2 = random.randint(0, 3)
            inputs = [input_1, input_2]
            print(inputs)

            selection = {
                0: self._progress_in_line_chart,
                1: self._pie_02_add_red,
                2: self._pie_02_add_green,
                3: self._pie_02_add_blue,
                99: self._exit
            }
            try:
                for input in inputs:
                    selection[input]()
            except KeyError:
                pass

            self._add_steps_to_pie_01()

    def _send_doggy_data(self):
        """
        Threaded process to repeatedly send doggy data
        """
        while True:
            time.sleep(1)
            will_to_live = self.sensor_service.get_doggy_will_to_live()
            doggy_payload = {
                'will_to_live': will_to_live,
                'service_allowed': self.service_permissions.get('suunto', True)
            }
            self.client.publish(MQTT_TOPIC_DOGGY, json.dumps(doggy_payload))
            logger_ack.info('Published to {}'.format(MQTT_TOPIC_DOGGY))

    def _progress_in_line_chart(self):
        try:
            self.payload['line_01']['you']['points'].append(self.future_line_01_progress['you'].pop(0))
        except IndexError:
            self.payload['line_01']['you']['points'].append({'x': self.iteration_count, 'y': random.randint(10, 90)})
        self.payload['line_01']['you']['points'].pop(0)

        try:
            self.payload['line_01']['opponent']['points'].append(self.future_line_01_progress['opponent'].pop(0))
        except IndexError:
            self.payload['line_01']['opponent']['points'].append({'x': self.iteration_count, 'y': random.randint(10, 90)})
            self.iteration_count += 1
        self.payload['line_01']['opponent']['points'].pop(0)
        self._send()

    def _ARMAGEDDON(self):
        """
        DO NOT USE. WILL CAUSE HELl ON EARTH.
        """
        while True:
            time.sleep(1)
            try:
                self._progress_in_line_chart()
            except KeyboardInterrupt:
                pass

    def _add_steps_to_pie_01(self):
        steps = self.sensor_service.get_steps()
        self.payload['pie_01']['green'] += steps
        self.payload['pie_01']['red'] -= steps
        self._send()

    def _pie_01_add_red(self):
        self.payload['pie_01']['red'] += 6
        self.payload['pie_01']['green'] -= 3
        self._send()

    def _pie_01_add_green(self):
        self.payload['pie_01']['red'] -= 3
        self.payload['pie_01']['green'] += 6
        self._send()

    def _pie_02_add_red(self):
        self.payload['pie_02']['red'] += 6
        self.payload['pie_02']['green'] -= 3
        self.payload['pie_02']['blue'] -= 3
        self._send()

    def _pie_02_add_green(self):
        self.payload['pie_02']['red'] -= 3
        self.payload['pie_02']['green'] += 6
        self.payload['pie_02']['blue'] -= 3
        self._send()

    def _pie_02_add_blue(self):
        self.payload['pie_02']['red'] -= 3
        self.payload['pie_02']['green'] -= 3
        self.payload['pie_02']['blue'] += 6
        self._send()

    def _exit(self):
        self.client.loop_stop()
        raise SystemExit


def main():
    print(
        """
        Sinful Tinderness OnStage started..
        
        Processes running:
        - Doggydata (threaded)
        - Progress in line chart
        - Progress in pie charts
        - Progress steps in pie chart
        """
    )
    try:
        sin_publisher = SinfulTinderness()
        sin_publisher.absolution()
    except (KeyboardInterrupt, SystemExit):
        print('Your sins are confessed, exiting.')
        sys.exit(0)


if __name__ == "__main__":
    # execute only if run as a script
    main()
