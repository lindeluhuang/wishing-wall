import React, { Component } from 'react';
import { WISHES } from '../shared/wishes';
import Header from './HeaderComponent'
import AllWishes from './AllWishesComponent';
import TopWishes from './TopWishesComponent';
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
        // const wishWithId = ({match}) => {
        //     return (
        //         <SingleWish 
        //             wish={this.state.wishes.filter(wish => wish.id === +match.params.wishId)[0]}
        //         />
        //     );
        // };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/allwishes' render={() => <AllWishes wishes={this.state.wishes} />} />
                    <Route path='/topwishes' render={() => <TopWishes wishes={this.state.wishes} />} />
                    
                    <Route path='/surpriseme' render={() => <SingleWish wish={this.state.wishes[0]} />} />
                    {/* <Route path='/wish/:wishId' component={wishWithId} /> */}
                    <Redirect to='/allwishes' render={() => <AllWishes wishes={this.state.wishes} />} />
                </Switch>
            </div>
        );
    };
}

export default Main;