import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'


function CompareHearts(a, b) {
    const thingA = a.hearts;
    const thingB = b.hearts;

    let comparison = 0;
    if (thingA > thingB) {
        comparison = -1;
    } else if (thingA < thingB) {
        comparison = 1;
    }
    return comparison;
}

function TopWishes({ wishes, hearts }) {

    // const filteredWishes = wishes.filter(wish => wish.hearts > 50);
    // let sortedWishes = filteredWishes.sort(CompareHearts);

    let sortedWishes = wishes.sort(CompareHearts);


    return (
        <React.Fragment>
            <PrimaryHeader />
            <WishesList wishes={sortedWishes} hearts={hearts} />
            <ButtonWish />
        </React.Fragment>
    );
};

export default TopWishes;