import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
// import { useHistory } from "react-router-dom";
// import { withRouter } from 'react-router-dom'


class SecondaryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const Item = () => {
        //     let history = useHistory();
        //     return (
        //         <>
        //           <img src="/assets/images/Chevron-Left.png" class="chevron-left" onClick={() => history.goBack()} />
        //         </>
        //     );
        // };

        // let history = useHistory();

        // const BrowserHistory = require('react-router/lib/BrowserHistory').default;


        return (
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <img src="/assets/images/Chevron-Left.png" class="chevron-left" />
                            {/* <img src="/assets/images/Chevron-Left.png" class="chevron-left" onClick={() => history.goBack()} /> */}
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