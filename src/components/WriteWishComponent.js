import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Input, Col, FormFeedback
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

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
            if (wish.length < 10) {
                errors.wish = 'Write just a bit more to fully realize your wish.';
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
        // alert('Current state is: ' + JSON.stringify(this.state));
        const newWishObj = {
            id: Math.floor(Math.random() * Math.floor(99999)),
            content: this.state.wish,
            datedisplay: this.setDateDisplay(),
            datetime: this.setDateTime(),
            hearts: 0
        }
        event.preventDefault();

        if (!this.validate(this.state.wish).wish && this.state.wish.length) {
        this.props.setNewWish(newWishObj);
        this.props.history.goBack()
    }

    }

    setDateTime() {
        var d = new Date();
        return d;
    }

    setDateDisplay() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var d = new Date();
        var month = months[d.getMonth()];
        var year = d.getFullYear().toString().substr(-2);
        return (month + ' `' + year)
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