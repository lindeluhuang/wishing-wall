import WishesList from './WishesListComponent'

function CompareDate(a, b) {
    const thingA = a.datetime;
    const thingB = b.datetime;

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


function AllWishes({ wishes }) {

    let sortedWishes = wishes.sort(CompareDate);

    return (
        <WishesList wishes={sortedWishes} />
    );
};

export default AllWishes;