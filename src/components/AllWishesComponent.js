import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'

function CompareDate(a, b) {
    const thingA = a.datetime;
    const thingB = b.datetime;

    let comparison = 0;
    if (thingA > thingB) {
        comparison = -1;
    } else if (thingA < thingB) {
        comparison = 1;
    }
    return comparison;
}


function AllWishes({ wishes, addHeart }) {

    let sortedWishes = wishes.sort(CompareDate);

    return (
        <React.Fragment>
            <PrimaryHeader />
            <WishesList wishes={sortedWishes} addHeart={addHeart} />
            <ButtonWish />
        </React.Fragment>
    );
};

export default AllWishes;