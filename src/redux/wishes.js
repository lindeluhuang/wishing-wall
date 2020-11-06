import { WISHES } from '../shared/wishes';
import * as ActionTypes from './ActionTypes';



// setDateDisplay() {
//     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     var d = new Date();
//     var month = months[d.getMonth()];
//     var year = d.getFullYear().toString().substr(-2);
//     return (month + ' `' + year)
// }

export const Wishes = (state = WISHES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WISH:
            const wish = action.payload;
            wish.id = state.length;
            let d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[d.getMonth()];
    let year = d.getFullYear().toString().substr(-2);

    debugger
            wish.datetime = d;
            wish.datedisplay = month + ' `' + year;
            return state.concat(wish);
        default:
            return state;
    }
};