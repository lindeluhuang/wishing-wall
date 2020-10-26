import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderWishItem({ wish }) {
    return (
        <Card className="wishItem">
            <CardBody>
                <Link to={`/wish/${wish.id}`}>
                    <CardTitle>{wish.content}</CardTitle>
                </Link>
                <CardSubtitle><img src="/assets/images/Heart.png" class="heart-icon" /> {wish.hearts} hearts • {wish.datedisplay}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

function WishesList({ wishes }) {

    const getWishes = wishes.map(wish => {
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