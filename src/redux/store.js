import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

const middleware = [thunk];
const rootReducer = combineReducers({ timerState: reducer });
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
