import time from './time.js';
import {combineReducers} from 'redux';
import getData from './getData.js';
import display from './display.js';

const rootReducer = combineReducers({time,getData,display})

export default rootReducer;