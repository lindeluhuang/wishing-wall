import * as ActionTypes from './ActionTypes';

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