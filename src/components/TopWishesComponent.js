import React from 'react';
import MainHeader from './MainHeaderComponent'
import WishesList from './WishesListComponent'
import MakeWish from './MakeWishComponent'


function CompareHearts(a, b) {
    const thingA = a.hearts;
    const thingB = b.hearts;

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

function TopWishes({ wishes }) {

    const filteredWishes = wishes.filter(wish => wish.hearts > 50);
    let sortedWishes = filteredWishes.sort(CompareHearts);


    return (
        <React.Fragment>
            <MainHeader />
            <WishesList wishes={sortedWishes} />
            <MakeWish />
        </React.Fragment>
    );
};

export default TopWishes;