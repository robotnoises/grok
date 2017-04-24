import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase'

// Add firebase to reducers
export const rootReducer = combineReducers({
  firebase: firebaseStateReducer
});