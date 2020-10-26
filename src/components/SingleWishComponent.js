import React, { Component } from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import ShuffleButton from './ShuffleButtonComponent'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function SingleWish({ wish }) {
    return (
        <React.Fragment>
            <SecondaryHeader />
            <div className="container single-wish">
                <Card>
                    <CardBody>
                        <CardTitle className="single-wish-title">{wish.content}</CardTitle>
                        <CardSubtitle><img src="/assets/images/Heart.png" class="heart-icon" /> {wish.hearts} hearts • {wish.datedisplay}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
            <ShuffleButton />
        </React.Fragment>
    );
}

export default SingleWish;