import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


function SingleWish({ wish }) {
    return (
        <div className="container single-wish">
            <Card>
                <CardBody>
                    <CardTitle className="single-wish-title">{wish.content}</CardTitle>
                    <CardSubtitle><img src="/assets/images/Heart.png" class="heart-icon" /> {wish.hearts} hearts • {wish.datedisplay}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default SingleWish;