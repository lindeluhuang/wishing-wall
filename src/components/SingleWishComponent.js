import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import ButtonShuffle from './ButtonShuffleComponent'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


function SingleWish(props) {
    return (

        <React.Fragment>
            <SecondaryHeader title="A single wish" />
            <div className="container single-wish">
                <Card>
                    <CardBody>
                        <CardTitle className="single-wish-title">{props.wish.content}</CardTitle>
                        <CardSubtitle><img src="/assets/images/Heart.png" class="heart-icon" /> {props.wish.hearts} hearts • {props.wish.datedisplay}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
            <ButtonShuffle wishes={props.wishes} currentWish={props.wish}/>
        </React.Fragment>
    );
}

export default SingleWish;