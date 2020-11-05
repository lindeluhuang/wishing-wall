import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import WriteWish from './WriteWishComponent'
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';


function MakeAWish({ setNewWish }) {
    return (
        <React.Fragment>
            <SecondaryHeader title="Make a wish" history={useHistory()} />
            <div className="container single-wish">
                <WriteWish setNewWish={setNewWish} history={useHistory()}/>
            </div>
        </React.Fragment>
    );
}

export default MakeAWish;