import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import heartIcon from '../images/Heart.png';


function RenderWishItem({ wish, hearts }) {

    function handleClick(e) {
        e.preventDefault();
        wish.hearts++;

    }

    let initialVal = hearts.filter(heartval => heartval.wishid === wish.id);
    let heartsToDisplay = initialVal[0].heartsval;


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
                    {heartsToDisplay} hearts • {wish.datedisplay}</CardSubtitle>
            </CardBody>
        </Card>
    );
}


function WishesList({ wishes, hearts }) {
    const getWishes = wishes.map(wish => {
        return (
            <div key={wish.id} >
                <RenderWishItem wish={wish} hearts={hearts} />
                {/* <RenderWishItem wish={wish} heartsval={hearts.filter(heartval => heartval.wishid === wish.id)} /> */}
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