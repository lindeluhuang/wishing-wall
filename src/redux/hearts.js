import { HEARTS } from '../shared/hearts';
import * as ActionTypes from './ActionTypes';

export const Hearts = (state = HEARTS, action) => {
    switch (action.type) {
        // case ActionTypes.ADD_HEART:
        //     debugger
        //     const heart = {hello: 1};
        //     heart.id = state.length;
        //     heart.wishid = action.payload.wishid;
        //     heart.heartsval = 0;
        //     return state.concat(heart);
        case ActionTypes.ADD_WISH:
            const heart = {};
            heart.id = state.length;
            heart.wishid = state.length;
            heart.heartsval = 0;
            return state.concat(heart);
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