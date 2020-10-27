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
            wishes: WISHES,
        };
    }

    render() {
        
        // const wishWithId = ({match}) => {
        //     return (
        //         <SingleWish 
        //             wish={this.state.wishes.filter(wish => wish.id === +match.params.wishId)[0]
        //         />
        //     );
        // };

        const wishWithId = ({match}) => {
            return (
                <SingleWish 
                    wish={this.state.wishes.filter(wish => wish.id === +match.params.wishId)[0]} wishes = {this.state.wishes}
                />
            );
        };


        return (
            <div>
                <Switch>
                    <Route path='/allwishes' render={() => <AllWishes wishes={this.state.wishes} />} />
                    <Route path='/topwishes' render={() => <TopWishes wishes={this.state.wishes} />} />
                    <Route path='/shuffledwishes' render={() => <ShuffledWishes wishes={this.state.wishes} />} />
                    <Route path='/wish/:wishId' component={wishWithId} />
                    <Route path='/makeawish' render={() => <MakeAWish />} />
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.state.wishes} />} />
                </Switch>
            </div>
        );
    };
}

export default Main;