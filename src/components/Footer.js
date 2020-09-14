import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import twitterIcon from '../Assets/icon-twitter.png';
import fbIcon from '../Assets/icon-facebook.png';


export const Footer = (props) => {
  return(
    <footer>
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <h3 className="main-text">chr.dc</h3>
          </Col>
          <Col sm={{ size: 'auto', offset: 6 }}>
            <ul className="list-inline">
              <li className="list-inline-item colum">
                <a href="https://www.linkedin.com/in/edson-neto-692359136/" >
                  <img src={twitterIcon} alt="twitter icon"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/edson-neto-692359136/" >
                  <img src={fbIcon} alt="fb icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

  );
}

export default Footer;
