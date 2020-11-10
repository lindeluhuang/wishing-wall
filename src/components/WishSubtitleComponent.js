import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plusHeart } from '../redux/ActionCreators';
import { CardSubtitle } from 'reactstrap';
import heartIcon from '../images/Heart.png';

const mapStateToProps = (state, ownProps) => {
    return {
        hearts: state.hearts,
        wish: ownProps.wish

    };
};

const mapDispatchToProps = {
    plusHeart: (wishid) => (plusHeart(wishid))
};


class WishSubtitle extends Component {
    render() {
        function handleClick(e, wishid, plusHeart) {
            e.preventDefault();
            debugger
            plusHeart(wishid);
        }

        let heartObj = this.props.hearts.filter(heartval => heartval.wishid === this.props.wish.id)[0]
        let heartsToDisplay = heartObj.heartsval;
        let heartsLastDate = heartObj.lastheart;

        return (
            <CardSubtitle>
                <img
                    src={heartIcon}
                    className="heart-icon"
                    onClick={(e) => handleClick(e, this.props.wish.id, this.props.plusHeart)}
                />
                {heartsToDisplay} hearts • {this.props.wish.datedisplay}<br></br>
                <em>Last heart on {heartsLastDate}</em>

            </CardSubtitle>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishSubtitle);