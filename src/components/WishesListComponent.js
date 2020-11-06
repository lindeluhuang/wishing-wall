import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import heartIcon from '../images/Heart.png';


function RenderWishItem({ wish }) {

    function handleClick(e) {
        e.preventDefault();
        wish.hearts++;

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


function WishesList({ wishes }) {

    const getWishes = wishes.map( wish => {
        return (
            <div key={wish.id} >
                <RenderWishItem wish={wish} />
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