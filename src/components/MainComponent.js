import React, { Component } from 'react';
import { WISHES } from '../shared/wishes';
import AllWishes from './AllWishesComponent';
import TopWishes from './TopWishesComponent';
import ShuffledWishes from './ShuffledWishesComponent';
import SingleWish from './SingleWishComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishes: WISHES,
        };
    }

    render() {

        // const wishesCount = this.state.wishes.filter(wish => wish).length;

        // function SurpriseMe({ wishes }) {
        //     let randNum = Math.floor(Math.random() * wishesCount);

        //     return (
        //         <SingleWish 
        //             wish={wishes.filter(wish => wish.id === randNum)[0]}
        //         />

        //     );
            
        // }
        
        
        const wishWithId = ({match}) => {
            return (
                <SingleWish 
                    wish={this.state.wishes.filter(wish => wish.id === +match.params.wishId)[0]}
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
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.state.wishes} />} />
                </Switch>
            </div>
        );
    };
}

export default Main;