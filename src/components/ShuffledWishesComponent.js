import React from 'react';
import PrimaryHeader from './PrimaryHeaderComponent'
import WishesList from './WishesListComponent'
import ButtonWish from './ButtonWishComponent'

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }



function ShuffledWishes({ wishes, }) {

    let shuffleWishes = wishes.sort( () => Math.random() - 0.5);
    // let shuffleWishes = shuffle({wishes}); 

    return (
        <React.Fragment>
            <PrimaryHeader />
            <WishesList wishes={shuffleWishes} />
            <ButtonWish />
        </React.Fragment>
    );
};

export default ShuffledWishes;