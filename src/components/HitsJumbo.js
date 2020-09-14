import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PropTypes from 'prop-types';


export const HitsJumbo = (props) => {
  let numHits = props.hits;

  return (
    <div>
      <Jumbotron fluid className="hitsviewer">
        <Container fluid id="histviewer-container" className="main-text">
          <h1>HITS</h1>
          <div id="hitsviewer-box">
            <h1>{numHits}</h1>
          </div>
          <p className="secondary-text">Cliques em links</p>
        </Container>
      </Jumbotron>
    </div>

  );
}

// enforce this type
HitsJumbo.propTypes = {
  hits : PropTypes.string
};

// default arguments
HitsJumbo.defaultProps = {
  hits: 0
};
