import {CONTACTS_PATH, LEADERBOARD_PATH} from "./paths/local_paths";

/* LOADER STYLES */
export const LOADER_STYLE = 'bars';  // blank, balls, bars, bubbles, cubes, cylon, spin, spinningBubbles, spokes
export const LOADER_WIDTH = 50;
export const LOADER_HEIGHT = 50;


/* HEADER STYLES */
export const HEADER_HEIGHT = '60px';
export const HEADER_LOGO_WIDTH = 60;
export const HEADER_LOGO_HEIGHT = 60;

export const nav_buttons = [
    {name: 'Challenges', links_to: LEADERBOARD_PATH, defaultMessage: 'Challenges'},
    {name: '', links_to: CONTACTS_PATH, defaultMessage: ''},
]

/* PUBLIC_CONTAINER STYLES */
export const PUBLIC_CONTAINER_PADDING = '20px';

export const PRIVATE_CONTAINER_PADDING = '20px';

/* SIDEBAR STYLES */
export const SIDEBAR_WIDTH = '235px';
export const SIDEBAR_BUTTON_HEIGHT = '60px';

export const sidebar_buttons = [
    {name: 'Dashboard', id: "sidebar.buttons.dashboard", links_to: '/dashboard', defaultMessage: 'Dashboard'},
    {name: '', id: "sidebat.buttons.home", links_to: '', defaultMessage: "Challenges"},
    {name: '', id: "sidebat.buttons.home", links_to: '/controls', defaultMessage: "Controls"},


];

export const MQTT_EWBSOCKET_PORT = '8000';
export const MQTT_WEBSOCKET_ADDRESS = 'broker.mqttdashboard.com';
export const MQTT_WEBSOCKET_URL = MQTT_WEBSOCKET_ADDRESS + ':' + MQTT_EWBSOCKET_PORT;
export const MQTT_TOPIC = 'sinful_tinderness_core';
export const MQTT_DOGE_TOPIC = MQTT_TOPIC + '/doggy';
export const MQTT_OPTIONS = {
    useSSL: true,
};