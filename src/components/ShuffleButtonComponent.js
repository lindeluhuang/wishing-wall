import React from 'react';
import {Button} from 'reactstrap';


function ShuffleButton({ wish }) {
    return (
            <div className="container fixed-bottom container-btn-shuffle">
                <Button outline>See Another</Button>
            </div>

    );
}

export default ShuffleButton;