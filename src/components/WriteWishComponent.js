import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Input, Col, FormFeedback
} from 'reactstrap';

class WriteWish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wish: '',
            touched: {
                wish: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(wish) {

        const errors = {
            wish: ''
        };

        if (this.state.touched.wish) {
            if (wish.length < 8) {
                errors.wish = 'Surely your wish is longer than that!';
            }
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
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

        const errors = this.validate(this.state.wish);

        return (
            <div className="row row-content">
                <div className="col">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Col>
                                <Input type="textarea" id="wish" name="wish"
                                    rows="12"
                                    placeholder="I wish..."
                                    value={this.state.wish}
                                    invalid={errors.wish}
                                    onBlur={this.handleBlur("wish")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.wish}</FormFeedback>
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