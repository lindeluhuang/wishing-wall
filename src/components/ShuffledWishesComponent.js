import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'

function ShuffledWishes({ wishes, hearts, plusHeart}) {

    let shuffleWishes = wishes.sort( () => Math.random() - 0.5);

    return (
        <React.Fragment>
            <PrimaryHeader />
            <WishesList wishes={shuffleWishes} hearts={hearts} plusHeart={plusHeart} />
            <ButtonWish />
        </React.Fragment>
    );
};

export default ShuffledWishes;