import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const minLength = len => val => val && (val.length >= len);

class WriteWish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wish: '',
            touched: {
                wish: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addWish(values.wish);
        this.props.resetWishesForm();
        this.props.history.goBack()
    }

    render() {

        return (
            <div className="row row-content">
                <div className="col">
                    <Form model="wishesForm" onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Control.textarea model=".wish" id="wish" name="wish"
                                    className="form-control"
                                    placeholder="I wish..."
                                    autoFocus
                                    validators={{
                                        required,
                                        minLength: minLength(10)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".wish"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Your wish awaits...',
                                        minLength: 'Write just a bit more to fully realize your wish.',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button outline type="submit" className="btn-release-wish">Release Your Wish</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default WriteWish;