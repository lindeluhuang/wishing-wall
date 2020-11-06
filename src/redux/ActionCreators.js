import * as ActionTypes from './ActionTypes';

export const addWish = (content) => ({
    type: ActionTypes.ADD_WISH,
    payload: {
        content: content
    }
});