// Create a client instance
import {MQTT_EWBSOCKET_PORT, MQTT_OPTIONS, MQTT_TOPIC, MQTT_WEBSOCKET_ADDRESS} from "../../Constants/componentSettings";

let client = new window.Paho.MQTT.Client(MQTT_WEBSOCKET_ADDRESS, Number(MQTT_EWBSOCKET_PORT), "clientId");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect}, MQTT_OPTIONS);


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe(MQTT_TOPIC);
  let message = new window.Paho.MQTT.Message("BALLS OF STEEL");
  message.destinationName = MQTT_TOPIC;
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}