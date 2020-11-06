import React, { Component } from 'react';
import AllWishes from './AllWishesComponent';
import TopWishes from './TopWishesComponent';
import ShuffledWishes from './ShuffledWishesComponent';
import SingleWish from './SingleWishComponent';
import MakeAWish from './MakeAWishComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        wishes: state.wishes,
        hearts: state.hearts
    };
};

class Main extends Component {

    


    // setNewWish = (newVal) => {
    //     console.log(newVal);
    //     this.setState({ wishes: [...this.props.wishes, newVal] })
    // }

    // addHeart = (wishToUpdate) => {
    //     console.log(wishToUpdate);
    //     let updatedWishes = this.props.wishes.map(wish => [wishToUpdate].find(o => o.id === wish.id) || wish);
    //     this.setState({ wishes: updatedWishes })
    // }

    render() {

        const wishWithId = ({ match }) => {
            return (
                <SingleWish
                    wish={this.props.wishes.filter(wish => wish.id === +match.params.wishId)[0]} 
                    wishes={this.props.wishes} 
                    
                />
            );
        };


        return (
            <div>
                <Switch>
                    <Route path='/allwishes' render={() => <AllWishes wishes={this.props.wishes} hearts={this.props.hearts} />} />
                    <Route path='/topwishes' render={() => <TopWishes wishes={this.props.wishes} hearts={this.props.hearts} />} />
                    <Route path='/shuffledwishes' render={() => <ShuffledWishes wishes={this.props.wishes} hearts={this.props.hearts} />} />
                    <Route path='/wish/:wishId' component={wishWithId} />
                    <Route path='/makeawish' render={() => <MakeAWish setNewWish={this.setNewWish} />} />
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.props.wishes} hearts={this.props.hearts} />} />
                </Switch>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));