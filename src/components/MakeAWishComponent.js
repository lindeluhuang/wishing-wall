import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import ButtonShuffle from './ButtonShuffleComponent'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function MakeAWish() {
    return (
        <React.Fragment>
            <SecondaryHeader title="Make a wish"/>
            <div className="container single-wish">
                <Card>
                    <CardBody>
                        <CardTitle className="single-wish-title">Write your wish...</CardTitle>
                        
                    </CardBody>
                </Card>
                <Button outline className="btn-release-wish">Release Your Wish</Button>
            </div>
        </React.Fragment>
    );
}

export default MakeAWish;