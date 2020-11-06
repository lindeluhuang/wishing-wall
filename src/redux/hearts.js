import { HEARTS } from '../shared/hearts';
import * as ActionTypes from './ActionTypes';

export const Hearts = (state = HEARTS, action) => {
    switch (action.type) {
        case ActionTypes.PLUS_HEART:
            const wishid = action.payload.wishid;
            let newState = [...state];
            const heartsid = newState.filter(heart => heart.wishid === wishid)[0].id;
            newState[heartsid].heartsval++;
            return newState;
        default:
            return state;
    }
};