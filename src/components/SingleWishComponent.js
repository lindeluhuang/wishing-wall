import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import heartIcon from '../images/Heart.png';
import { Slide, Fade } from "react-awesome-reveal";


function SingleWish(props) {

    function handleClick(e) {
        e.preventDefault();
        props.plusHeart(props.wish.id);
      }

      let heartsToDisplay = props.hearts.filter(heartval => heartval.wishid === props.wish.id)[0].heartsval;

    return (
        <React.Fragment>
            {/* <Slide triggerOnce direction="down"> */}
            <Fade triggerOnce>
            <SecondaryHeader title="A single wish" history={useHistory()} />
            <div className="container single-wish">
                <Card>
                    <CardBody>
                        <CardTitle className="single-wish-title">{props.wish.content}</CardTitle>
                        <CardSubtitle><img
                            src={heartIcon}
                            class="heart-icon"
                            onClick={handleClick}
                        />{heartsToDisplay} hearts • {props.wish.datedisplay}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
            </Fade>
            {/* </Slide> */}
        </React.Fragment>
    );
}

export default SingleWish;