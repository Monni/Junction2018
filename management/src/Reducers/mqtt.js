import {loop, Cmd} from 'redux-loop';
const initialState = {};

const Run = (func, ...args) => Cmd.run(func, {
    successActionCreator: x => x,
    args
});
const mqttReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MQTT_GET_MESSAGE':
            console.log(action.payload)
            return {...state, messages: action.payload}
        default:
            return {...state};
    }
}

export default mqttReducer;