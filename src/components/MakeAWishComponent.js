import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';


function MakeAWish() {
    return (
        <React.Fragment>
            <SecondaryHeader title="Make a wish" history={useHistory()}/>
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