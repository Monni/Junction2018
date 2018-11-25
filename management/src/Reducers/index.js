import {combineReducers} from 'redux-loop';
import mqttReducer from './mqtt';

const rootReducer = combineReducers({
    mqtt: mqttReducer,
});

export default rootReducer;
