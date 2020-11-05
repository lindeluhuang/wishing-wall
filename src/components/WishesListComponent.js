import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import heartIcon from '../images/Heart.png';


function RenderWishItem({ wish, addHeart }) {

    function handleClick(e) {
        e.preventDefault();
        wish.hearts++;
        addHeart(wish)
      }

    return (
        <Card className="wishItem">
            <CardBody>
                <Link to={`/wish/${wish.id}`}>
                    <CardTitle>{wish.content}</CardTitle>
                </Link>
                <CardSubtitle><img
                    src={heartIcon}
                    class="heart-icon"
                    onClick={handleClick}
                />
                    {wish.hearts} hearts • {wish.datedisplay}</CardSubtitle>
            </CardBody>
        </Card>
    );
}


function WishesList({ wishes, addHeart }) {

    const getWishes = wishes.map( wish => {
        return (
            <div key={wish.id} >
                <RenderWishItem wish={wish} addHeart={addHeart}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="card-columns">
                {getWishes}
            </div>
        </div>
    );
}

export default WishesList;