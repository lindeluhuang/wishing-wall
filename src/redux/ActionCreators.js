import * as ActionTypes from './ActionTypes';
import { WISHES } from '../shared/wishes';

export const fetchWishes = () => dispatch => {

    dispatch(wishesLoading());

    setTimeout(() => {
        dispatch(showWishes(WISHES));
    }, 2000);
};

export const wishesLoading = () => ({
    type: ActionTypes.WISHES_LOADING
});

export const wishesFailed = errMess => ({
    type: ActionTypes.WISHES_FAILED,
    payload: errMess
});

export const showWishes = wishes => ({
    type: ActionTypes.SHOW_WISHES,
    payload: wishes
});

export const addWish = (content) => ({
    type: ActionTypes.ADD_WISH,
    payload: {
        content: content
    }
});

export const addHeart = (wishid) => ({
    type: ActionTypes.ADD_HEART,
    payload: {
        wishid: wishid
    }
});

export const plusHeart = (wishid) => ({
    type: ActionTypes.PLUS_HEART,
    payload: {
        wishid: wishid
    }
});

