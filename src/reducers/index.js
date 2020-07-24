import time from './time.js';
import {combineReducers} from 'redux';
import getData from './getData.js';

const rootReducer = combineReducers({time,getData})

export default rootReducer;