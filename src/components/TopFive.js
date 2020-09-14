import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

export const TopFive = (props) =>{
  const itemlist = props.items.map((item) => {
    let link = item.shortUrl;
    let clicks = item.hits;

    return (
      <ListGroupItem className="item">
        <p>
          <span className="linkurl">{link}</span>
          <span className="linkclicks">{clicks}</span>
        </p>
      </ListGroupItem>

    );
  });

  return(
    <div className="container topfivecontainer">
      <h1 id="top5header">TOP 5</h1>
      <ListGroup flush className="item-listgroup">
        {itemlist}
      </ListGroup>
    </div>
  );

}

// enforce this type
TopFive.propTypes = {
  items : PropTypes.array
};

// default arguments
TopFive.defaultProps = {
  items: [
    {
      shortUrl: 'no link',
      hits: 0
    }
  ]
};
