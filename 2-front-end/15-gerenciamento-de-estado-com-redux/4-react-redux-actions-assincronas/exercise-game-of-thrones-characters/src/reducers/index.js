import { combineReducers } from 'redux';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
  characterReducer,
});

export default rootReducer;