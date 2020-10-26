import React, { Component }  from 'react';
import { Jumbotron } from 'reactstrap';


class SecondaryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <h2 className="text-left secondary-nav-title"><img src="/assets/images/Chevron-Left.png" class="chevron-left" /> A single wish</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default SecondaryHeader;