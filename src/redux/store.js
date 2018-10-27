import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth_reducer from './auth-reducer';

const store = createStore(
    auth_reducer,
    {},
    compose ( applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : f => f)
);
export default store;