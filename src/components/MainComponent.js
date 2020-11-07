import React, { Component } from 'react';
import WishWall from './WishWallComponent';
import SingleWish from './SingleWishComponent';
import MakeAWish from './MakeAWishComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addWish, plusHeart, fetchWishes } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        wishes: state.wishes,
        hearts: state.hearts
    };
};

const mapDispatchToProps = {
    addWish: (content) => (addWish(content)),
    plusHeart: (wishid) => (plusHeart(wishid)),
    // fetchWishes: () => (fetchWishes())
    resetWishesForm: () => (actions.reset('wishesForm'))
};

class Main extends Component {

    // componentDidMount() {
    //     this.props.fetchWishes();
    // }

    render() {

        const wishWithId = ({ match }) => {
            return (
                <SingleWish
                    // wish={this.props.wishes.wishes.filter(wish => wish.id === +match.params.wishId)[0]}
                    wish={this.props.wishes.filter(wish => wish.id === +match.params.wishId)[0]}
                    hearts={this.props.hearts}
                    plusHeart={this.props.plusHeart}
                />
            );
        };

        return (
            <div>
                <Switch>
                    <Route path='/allwishes' render={() => <WishWall
                        wishes={this.props.wishes}
                        // wishes={this.props.wishes.wishes}
                        // wishesLoading={this.props.wishes.isLoading}
                        // wishesErrMess={this.props.wishes.errMess}
                        hearts={this.props.hearts}
                        plusHeart={this.props.plusHeart}
                        tab="all"
                    />}
                    />
                    <Route path='/topwishes' render={() => <WishWall
                        wishes={this.props.wishes}
                        // wishes={this.props.wishes.wishes}
                        // wishesLoading={this.props.wishes.isLoading}
                        // wishesErrMess={this.props.wishes.errMess}
                        hearts={this.props.hearts}
                        plusHeart={this.props.plusHeart}
                        tab="top"
                    />}
                    />
                    <Route path='/shuffledwishes' render={() => <WishWall
                        wishes={this.props.wishes}
                        // wishes={this.props.wishes.wishes}
                        // wishesLoading={this.props.wishes.isLoading}
                        // wishesErrMess={this.props.wishes.errMess}
                        hearts={this.props.hearts}
                        plusHeart={this.props.plusHeart}
                        tab="shuffled"
                    />}
                    />
                    <Route path='/wish/:wishId' component={wishWithId} />
                    <Route path='/makeawish' render={() => <MakeAWish
                        setNewWish={this.setNewWish}
                        addWish={this.props.addWish}
                        resetWishesForm={this.props.resetWishesForm}
                    />}
                    />
                    <Redirect to='/allwishes' render={() => <WishWall
                        wishes={this.props.wishes}
                        // wishes={this.props.wishes.wishes}
                        // wishesLoading={this.props.wishes.isLoading}
                        // wishesErrMess={this.props.wishes.errMess}
                        wishesLoading={this.props.wishes.isLoading}
                        wishesErrMess={this.props.wishes.errMess}
                        hearts={this.props.hearts}
                        plusHeart={this.props.plusHeart}
                        tab="all"
                    />}
                    />
                </Switch>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));