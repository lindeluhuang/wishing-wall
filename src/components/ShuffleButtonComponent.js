import React, { Component } from 'react';
import SecondaryHeader from './SecondaryHeaderComponent'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function ShuffleButton({ wish }) {
    return (
            <div className="container fixed-bottom container-btn-shuffle">
                <Button outline className="btn-shuffle">See Another</Button>
            </div>

    );
}

export default ShuffleButton;