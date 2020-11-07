import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Wishes } from './wishes';
import { Hearts } from './hearts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            wishes: Wishes,
            hearts: Hearts
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};