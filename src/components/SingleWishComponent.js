import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import heartIcon from '../images/Heart.png';
import { Fade } from "react-awesome-reveal";

function RenderSingleWish({ wish, hearts, plusHeart }) {

    function handleClick(e) {
        e.preventDefault();
        plusHeart(wish.id);
    }

    let heartObj = hearts.filter(heartval => heartval.wishid === wish.id)[0]
    let heartsToDisplay = heartObj.heartsval;
    let heartsLastDate = heartObj.lastheart;

    return (
        <Card>
            <CardBody>
                <CardTitle className="single-wish-title">{wish.content}</CardTitle>
                <CardSubtitle><img
                    src={heartIcon}
                    class="heart-icon"
                    onClick={handleClick}
                />{heartsToDisplay} hearts • {wish.datedisplay}<br></br>
                <em>Last heart on {heartsLastDate}</em>

                </CardSubtitle>
            </CardBody>
        </Card>
    );
}


function SingleWish(props) {

    return (
        <React.Fragment>
            <Fade >
                <SecondaryHeader title="A single wish" history={useHistory()} />
                <div className="container single-wish">
                    <RenderSingleWish wish={props.wish} hearts={props.hearts} plusHeart={props.plusHeart} />
                </div>
            </Fade>
        </React.Fragment>
    );
}

export default SingleWish;