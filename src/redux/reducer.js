import { WISHES } from '../shared/wishes';
import { HEARTS } from '../shared/hearts';

export const initialState = {
    wishes: WISHES,
    hearts: HEARTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
