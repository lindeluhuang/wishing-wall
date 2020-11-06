import {createStore, combineReducers} from 'redux';
import { Wishes } from './wishes';
import { Hearts } from './hearts';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            wishes: Wishes,
            hearts: Hearts
        })
    );

    return store;
};