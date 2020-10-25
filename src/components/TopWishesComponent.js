
import WishesList from './WishesListComponent'


function CompareHearts(a, b) {
    const thingA = a.hearts;
    const thingB = b.hearts;

    let comparison = 0;
    if (thingA > thingB) {
        comparison = -1;
    } else if (thingA < thingB) {
        comparison = 1;
    }
    console.log("Comparison: ");
    console.log(comparison);
    return comparison;
}

function TopWishes({ wishes }) {

    const filteredWishes = wishes.filter(wish => wish.hearts > 50);
    let sortedWishes = filteredWishes.sort(CompareHearts);


    return (
        <WishesList wishes={sortedWishes} />
    );
};

export default TopWishes;