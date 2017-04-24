import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { firebaseConfig, reactReduxConfig } from './config';
import { rootReducer } from './reducers';

const configured = reactReduxFirebase(firebaseConfig, reactReduxConfig);
const createStoreWithFirebase = compose(configured)(createStore);

export default initialState => createStoreWithFirebase(rootReducer, initialState); // returns a store instance
