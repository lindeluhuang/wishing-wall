import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Wishes } from './wishes';
import { Hearts } from './hearts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialWish } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            wishes: Wishes,
            hearts: Hearts,
            ...createForms({
                wishesForm: InitialWish
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};