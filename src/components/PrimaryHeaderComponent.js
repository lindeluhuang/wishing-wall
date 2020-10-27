import React, { Component }  from 'react';
import { Nav, Navbar, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class PrimaryHeader extends Component {

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
                                <h1 className="text-left">The Wishing Wall</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar expand="xs">
                    <div className="container">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/allwishes">
                                        All wishes
                                    </NavLink>
                                </NavItem>
                                <span>•</span>
                                <NavItem>
                                    <NavLink className="nav-link" to="/topwishes">
                                        Top wishes
                                    </NavLink>
                                </NavItem>
                                <span>•</span>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shuffledwishes">
                                        Shuffled wishes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default PrimaryHeader;