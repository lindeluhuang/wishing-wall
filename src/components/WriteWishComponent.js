import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }
    // handleSubmit(event) {
    // // alert('Current state is: ' + JSON.stringify(this.state));
    // const newWishObj = {
    //     id: Math.floor(Math.random() * Math.floor(99999)),
    //     content: this.state.wish,
    //     datedisplay: this.setDateDisplay(),
    //     datetime: this.setDateTime(),
    //     hearts: 0
    // }
    // event.preventDefault();

    // if (!this.validate(this.state.wish).wish && this.state.wish.length) {
    // // this.props.setNewWish(newWishObj);
    // this.props.history.goBack()
    // }
    // }

    // setDateTime() {
    //     var d = new Date();
    //     return d;
    // }

    // setDateDisplay() {
    //     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //     var d = new Date();
    //     var month = months[d.getMonth()];
    //     var year = d.getFullYear().toString().substr(-2);
    //     return (month + ' `' + year)
    // }

    render() {

        return (
            <div className="row row-content">
                <div className="col">
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Control.textarea model=".wish" id="wish" name="wish"
                                    className="form-control"
                                    placeholder="I wish..."
                                    validators={{
                                        required, 
                                        minLength: minLength(10),
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
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default WriteWish;