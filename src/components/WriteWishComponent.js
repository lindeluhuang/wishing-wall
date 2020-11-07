import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addWish, addHeart } from '../redux/ActionCreators';

const required = val => val && val.length;
const minLength = len => val => val && (val.length >= len);

const mapStateToProps = state => {
    return {
        wishes: state.wishes,
    };
};

const mapDispatchToProps = {
    addWish: (content, id) => (addWish(content, id)),
    addHeart: (wishid) => (addHeart(wishid))
};


class WriteWish extends Component {

    handleSubmit(values) {
        const wishid = this.props.wishes.length;
        this.props.addWish(values.wish, wishid);
        this.props.addHeart(wishid);
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

export default connect(mapStateToProps, mapDispatchToProps)(WriteWish);