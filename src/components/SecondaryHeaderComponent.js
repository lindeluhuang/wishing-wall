import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import chevronLeft from '../images/Chevron-Left.png';

class SecondaryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            {/* <img src="/assets/images/Chevron-Left.png" class="chevron-left" /> */}
                            <img src={chevronLeft} class="chevron-left" onClick={() => this.props.history.goBack()} />
                        </div>
                        <div className="col-10 secondary-nav-title">
                            {/* <h2>Titlehere!</h2> */}
                            <h2>{this.props.title}</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default SecondaryHeader;