import React from 'react';
import SecondaryHeader from './SecondaryHeaderComponent';
import WishSubtitle from './WishSubtitleComponent';
import {useHistory} from 'react-router-dom';
import {Card, CardBody, CardTitle} from 'reactstrap';

import {Fade} from 'react-awesome-reveal';

function RenderSingleWish({wish}) {
  return (
    <Card>
      <CardBody>
        <CardTitle className="single-wish-title">{wish.content}</CardTitle>
        <WishSubtitle wish={wish} />
      </CardBody>
    </Card>
  );
}

function SingleWish(props) {
  console.log('singlewishcomponent');
  return (
    <React.Fragment>
      <SecondaryHeader title="A single wish" history={useHistory()} />
      <Fade>
        <div className="container single-wish">
          <RenderSingleWish {...props} />
        </div>
      </Fade>
    </React.Fragment>
  );
}

export default SingleWish;
