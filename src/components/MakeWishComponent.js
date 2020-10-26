import React from 'react';
import {Button} from 'reactstrap';


function MakeWish({ wish }) {
    return (
            <div className="container fixed-bottom container-btn-make-wish">
                <Button outline>Make a Wish</Button>
            </div>

    );
}

export default MakeWish;