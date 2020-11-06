import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import { useHistory } from 'react-router-dom';
import WriteWish from './WriteWishComponent'
import { Slide } from "react-awesome-reveal";

function MakeAWish({ setNewWish, addWish }) {
    return (
        <React.Fragment>
            <Slide triggerOnce direction="up">
            <SecondaryHeader title="Make a wish" history={useHistory()} />
            <div className="container single-wish">
                <WriteWish setNewWish={setNewWish} addWish={addWish} history={useHistory()}/>
            </div>
            </Slide>
        </React.Fragment>
    );
}

export default MakeAWish;