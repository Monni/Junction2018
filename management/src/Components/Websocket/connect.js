import {MQTT_WEBSOCKET_URL} from "../../Constants/componentSettings";

var mqtt = require('mqtt')
var client  = mqtt.connect(MQTT_WEBSOCKET_URL)

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})