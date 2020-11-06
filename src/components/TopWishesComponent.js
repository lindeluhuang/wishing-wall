import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'


function CompareHearts(a, b) {
    const thingA = a.heartsValOnWish;
    const thingB = b.heartsValOnWish;

    let comparison = 0;
    if (thingA > thingB) {
        comparison = -1;
    } else if (thingA < thingB) {
        comparison = 1;
    }
    return comparison;
}

function TopWishes({ wishes, hearts, plusHeart }) {

    let wishesCopy = wishes;
    wishesCopy.map(wish => (wish.heartsValOnWish = (hearts.filter(heartval => heartval.wishid === wish.id)[0].heartsval)))
    let sortedWishes = wishesCopy.sort(CompareHearts);


    return (
        <React.Fragment>
            <PrimaryHeader />
            <WishesList wishes={sortedWishes} hearts={hearts} plusHeart={plusHeart} />
            <ButtonWish />
        </React.Fragment>
    );
};

export default TopWishes;