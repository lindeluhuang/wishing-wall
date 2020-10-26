import React from 'react';
import MainHeader from './MainHeaderComponent'
import WishesList from './WishesListComponent'
import MakeWish from './MakeWishComponent'

function CompareDate(a, b) {
    const thingA = a.datetime;
    const thingB = b.datetime;

    let comparison = 0;
    if (thingA > thingB) {
        comparison = -1;
    } else if (thingA < thingB) {
        comparison = 1;
    }
    console.log("Comparison: ");
    console.log(comparison);
    return comparison;
}


function AllWishes({ wishes }) {

    let sortedWishes = wishes.sort(CompareDate);

    return (
        <React.Fragment>
            <MainHeader />
            <WishesList wishes={sortedWishes} />
            <MakeWish />
        </React.Fragment>
    );
};

export default AllWishes;