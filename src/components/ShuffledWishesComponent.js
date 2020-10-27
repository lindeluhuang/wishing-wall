import React from 'react';
import MainHeader from './MainHeaderComponent'
import WishesList from './WishesListComponent'
import MakeWish from './MakeWishComponent'

function ShuffledWishes({ wishes }) {

    let shuffleWishes = wishes.sort( () => Math.random() - 0.5);

    return (
        <React.Fragment>
            <MainHeader />
            <WishesList wishes={shuffleWishes} />
            <MakeWish />
        </React.Fragment>
    );
};

export default ShuffledWishes;