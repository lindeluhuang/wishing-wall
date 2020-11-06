import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function ButtonWish() {
    return (
        <div className="fixed-bottom container-btn-make-wish">
            <div className="container">
            <Link to={'/makeawish'}>
                <Button outline>Make a Wish</Button>
            </Link>
            </div>
        </div>

    );
}

export default ButtonWish;