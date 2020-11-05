import React, { Component } from 'react';
import { WISHES } from '../shared/wishes';
import AllWishes from './AllWishesComponent';
import TopWishes from './TopWishesComponent';
import ShuffledWishes from './ShuffledWishesComponent';
import SingleWish from './SingleWishComponent';
import MakeAWish from './MakeAWishComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishes: WISHES
        };
    }

    setNewWish = (newVal) => {
        console.log(newVal);
        this.setState({ wishes: [...this.state.wishes, newVal] })
    }

    addHeart = (wishToUpdate) => {
        console.log(wishToUpdate);
        let updatedWishes = this.state.wishes.map(wish => [wishToUpdate].find(o => o.id === wish.id) || wish);
        this.setState({ wishes: updatedWishes })
    }

    render() {

        const wishWithId = ({ match }) => {
            return (
                <SingleWish
                    wish={this.state.wishes.filter(wish => wish.id === +match.params.wishId)[0]} 
                    wishes={this.state.wishes} 
                    addHeart={this.addHeart} 
                />
            );
        };


        return (
            <div>
                <Switch>
                    <Route path='/allwishes' render={() => <AllWishes wishes={this.state.wishes} addHeart={this.addHeart} />} />
                    <Route path='/topwishes' render={() => <TopWishes wishes={this.state.wishes} addHeart={this.addHeart} />} />
                    <Route path='/shuffledwishes' render={() => <ShuffledWishes wishes={this.state.wishes} addHeart={this.addHeart} />} />
                    <Route path='/wish/:wishId' component={wishWithId} />
                    <Route path='/makeawish' render={() => <MakeAWish setNewWish={this.setNewWish} />} />
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.state.wishes} addHeart={this.addHeart} />} />
                </Switch>
            </div>
        );
    };
}

export default Main;