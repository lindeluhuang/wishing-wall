import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import heartIcon from '../images/Heart.png';
import { Fade } from "react-awesome-reveal";
import { Loading } from './LoadingComponent';


function RenderWishItem({ wish, hearts, plusHeart }) {

    function handleClick(e) {
        e.preventDefault();
        plusHeart(wish.id);
    }

    let heartsToDisplay = hearts.filter(heartval => heartval.wishid === wish.id)[0].heartsval;

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


function WishesList({ wishes, hearts, plusHeart, isLoading, errMess }) {
    const getWishes = wishes.map(wish => {
        return (
            <div key={wish.id} >
                <Fade >
                    <RenderWishItem wish={wish} hearts={hearts} plusHeart={plusHeart} />
                </Fade>
            </div>
        );
    });

    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } if (wishes) {
        return (
            <div className="container">
                <div className="card-columns">
                    {getWishes}
                </div>
            </div>
        );
    }
}

export default WishesList;