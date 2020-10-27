import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function ButtonWish({ wish }) {
    return (
        <div className="container fixed-bottom container-btn-make-wish">
            <Link to={'/makeawish'}>
                <Button outline>Make a Wish</Button>
            </Link>

        </div>

    );
}

export default ButtonWish;