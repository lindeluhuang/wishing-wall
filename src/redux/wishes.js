import * as ActionTypes from './ActionTypes';
import { WISHES } from '../shared/wishes';

export const Wishes = (state = {
    // isLoading: true,
    // errMess: null,
    // wishes: [],
    wishes: WISHES
}, action) => {
    switch (action.type) {
        // case ActionTypes.SHOW_WISHES:
        //     return {...state, isLoading: false, errMess: null, wishes: action.payload};
        // case ActionTypes.WISHES_LOADING:
        //     return {...state, isLoading: true, errMess: null, wishes: []};
        // case ActionTypes.WISHES_FAILED:
        //     return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.ADD_WISH:
            const wish = action.payload;
            wish.id = state.length;
            let d = new Date();
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let month = months[d.getMonth()];
            let year = d.getFullYear().toString().substr(-2);

            wish.datetime = d;
            wish.datedisplay = month + ' `' + year;
            return state.concat(wish);
        default:
            return state;
    }
};