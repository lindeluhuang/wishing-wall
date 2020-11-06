import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'
import { Slide } from "react-awesome-reveal";

function ShuffledWishes({ wishes, hearts, plusHeart }) {

    let shuffleWishes = wishes.sort(() => Math.random() - 0.5);

    return (
        <React.Fragment>
            <PrimaryHeader />
            {/* <Slide triggerOnce direction="up"> */}
                <WishesList wishes={shuffleWishes} hearts={hearts} plusHeart={plusHeart} />
            {/* </Slide> */}
            <ButtonWish />
        </React.Fragment>
    );
};

export default ShuffledWishes;