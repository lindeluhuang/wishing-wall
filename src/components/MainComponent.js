import React, { Component } from 'react';
import AllWishes from './AllWishesComponent';
import TopWishes from './TopWishesComponent';
import ShuffledWishes from './ShuffledWishesComponent';
import SingleWish from './SingleWishComponent';
import MakeAWish from './MakeAWishComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWish, plusHeart } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        wishes: state.wishes,
        hearts: state.hearts
    };
};

const mapDispatchToProps = {
    addWish: (content) => (addWish(content)),
    plusHeart: (wishid) => (plusHeart(wishid))
};

class Main extends Component {

    render() {

        const wishWithId = ({ match }) => {
            return (
                <SingleWish
                    wish={this.props.wishes.filter(wish => wish.id === +match.params.wishId)[0]} 
                    wishes={this.props.wishes} 
                    hearts={this.props.hearts}
                    plusHeart={this.props.plusHeart}
                />
            );
        };

        return (
            <div>
                <Switch>
                    <Route path='/allwishes' render={() => <AllWishes wishes={this.props.wishes} hearts={this.props.hearts} plusHeart={this.props.plusHeart} />} />
                    <Route path='/topwishes' render={() => <TopWishes wishes={this.props.wishes} hearts={this.props.hearts} plusHeart={this.props.plusHeart} />} />
                    <Route path='/shuffledwishes' render={() => <ShuffledWishes wishes={this.props.wishes} hearts={this.props.hearts} plusHeart={this.props.plusHeart} />} />
                    <Route path='/wish/:wishId' component={wishWithId} />
                    <Route path='/makeawish' render={() => <MakeAWish setNewWish={this.setNewWish} addWish={this.props.addWish} />} />
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.props.wishes} hearts={this.props.hearts} plusHeart={this.props.plusHeart} />} />
                </Switch>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));