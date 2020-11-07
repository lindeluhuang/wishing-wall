import { HEARTS } from '../shared/hearts';
import * as ActionTypes from './ActionTypes';

export const Hearts = (state = HEARTS, action) => {
    switch (action.type) {
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
            let d = new Date();
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let month = months[d.getMonth()];
            let date = d.getDate();
            let year = d.getFullYear();
            newState[heartsid].lastheart = `${month} ${date}, ${year}`;
            return newState;
        default:
            return state;
    }
};