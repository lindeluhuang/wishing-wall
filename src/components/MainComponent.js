import React, {Component} from 'react';
import WishWall from './WishWallComponent';
import SingleWish from './SingleWishComponent';
import MakeAWish from './MakeAWishComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {addWish, plusHeart, fetchWishes} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    wishes: state.wishes,
    hearts: state.hearts,
  };
};

const mapDispatchToProps = {
  plusHeart: (wishid) => plusHeart(wishid),
  // fetchWishes: () => (fetchWishes())
  resetWishesForm: () => actions.reset('wishesForm'),
};

class Main extends Component {
  // componentDidMount() {
  //     this.props.fetchWishes();
  // }

  render() {
    const wishWithId = ({match}) => {
      return (
        <SingleWish
          // wish={this.props.wishes.wishes.filter(wish => wish.id === +match.params.wishId)[0]}
          wish={this.props.wishes.filter((wish) => wish.id === +match.params.wishId)[0]}
        />
      );
    };

    return (
      <div>
        <Switch>
          <Route path="/allwishes" render={() => <WishWall {...this.props} tab="all" />} />
          <Route path="/topwishes" render={() => <WishWall {...this.props} tab="top" />} />
          <Route
            path="/shuffledwishes"
            render={() => <WishWall {...this.props} tab="shuffled" />}
          />
          <Route path="/wish/:wishId" component={wishWithId} />
          <Route
            path="/makeawish"
            render={() => <MakeAWish resetWishesForm={this.props.resetWishesForm} />}
          />
          <Redirect to="/allwishes" render={() => <WishWall {...this.props} tab="all" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
