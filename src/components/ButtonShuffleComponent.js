import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function ButtonShuffle(props) {

    let shuffleWishes = props.wishes.sort(() => Math.random() - 0.5);
    let excludeSelf = shuffleWishes.filter(wish => wish.id !== props.currentWish.id );
    let wish = excludeSelf[0];

    return (
        <div className="container fixed-bottom container-btn-shuffle">
            <Link to={`/wish/${wish.id}`}>
                <Button outline>See Another</Button>
            </Link>
        </div>
    );
}

export default ButtonShuffle;