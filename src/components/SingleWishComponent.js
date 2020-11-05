import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


function SingleWish(props) {

    function handleClick(e) {
        e.preventDefault();
        props.wish.hearts++;
        props.addHeart(props.wish)
      }

    return (
        <React.Fragment>
            <SecondaryHeader title="A single wish" history={useHistory()} />
            <div className="container single-wish">
                <Card>
                    <CardBody>
                        <CardTitle className="single-wish-title">{props.wish.content}</CardTitle>
                        <CardSubtitle><img
                            src="/assets/images/Heart.png"
                            class="heart-icon"
                            onClick={handleClick}
                        /> {props.wish.hearts} hearts • {props.wish.datedisplay}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default SingleWish;