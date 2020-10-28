import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

class WriteWish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wish: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        
        return (
            <div className="row row-content">
                <div className="col">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Col>
                                <Input type="textarea" id="wish" name="wish"
                                placeholder="I wish..."
                                    rows="12"
                                    value={this.state.wish}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Button outline className="btn-release-wish">Release Your Wish</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default WriteWish;