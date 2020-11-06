import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'
// import { Slide } from "react-awesome-reveal";

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


function AllWishes({ wishes, hearts, plusHeart }) {

    let sortedWishes = wishes.sort(CompareDate);

    return (
        <React.Fragment>
            <PrimaryHeader />
            {/* <Slide triggerOnce direction="up"> */}
                <WishesList wishes={sortedWishes} hearts={hearts} plusHeart={plusHeart} />
            {/* </Slide> */}
            <ButtonWish />
        </React.Fragment>
    );
};

export default AllWishes;