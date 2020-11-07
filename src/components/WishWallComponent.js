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

function WishWallComponent({ wishes, hearts, plusHeart, tab }) {
    if (tab === "all") {
        let allSortedWishes = wishes.sort(CompareDate);
        return (
            <React.Fragment>
                <PrimaryHeader />
                <WishesList wishes={allSortedWishes} hearts={hearts} plusHeart={plusHeart} />
                <ButtonWish />
            </React.Fragment>
        );
    } else if (tab == "top") {
        let topWishes = wishes;
        topWishes.map(wish => (wish.heartsValOnWish = (hearts.filter(heartval => heartval.wishid === wish.id)[0].heartsval)))
        let topSortedWishes = topWishes.sort(CompareHearts);
        return (
            <React.Fragment>
                <PrimaryHeader />
                <WishesList wishes={topSortedWishes} hearts={hearts} plusHeart={plusHeart} />
                <ButtonWish />
            </React.Fragment>
        );
    } else if (tab == "shuffled") {
        let shuffledWishes = wishes.sort(() => Math.random() - 0.5);
        return (
            <React.Fragment>
                <PrimaryHeader />
                <WishesList wishes={shuffledWishes} hearts={hearts} plusHeart={plusHeart} />
                <ButtonWish />
            </React.Fragment>
        );
    } else {
        let allSortedWishes = wishes.sort(CompareDate);
        return (
            <React.Fragment>
                <PrimaryHeader />
                <WishesList wishes={allSortedWishes} hearts={hearts} plusHeart={plusHeart} />
                <ButtonWish />
            </React.Fragment>
        );
    }
};

export default WishWallComponent;