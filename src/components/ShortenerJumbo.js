import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Media,
  Button,
  Form,
  FormGroup,
  Input } from 'reactstrap';
import PropTypes from 'prop-types'


export class ShortenerJumbo extends Component {
  constructor(props){
    super(props);

    this.state = {url:''};
  }


  render(){
    const textStyle = {color:'white', fontFamily:'Roboto'};

    return (
      <div className="container-body">
        <Jumbotron fluid id="shortenerjumbo" className="centered">
          <Container fluid style={textStyle}>
            <div className="helptext">
              <h1 style={textStyle}>Encurte seus links</h1>
              <p className="shortener-text">
                Links são longos. Encurte os
                links que você deseja compartilhar,<br/> e acompanhe
                enquanto viajam através da internet.
              </p>
            </div>
            <FormGroup className="form-inline" id="shortenform">
              <Input type="email" name="link" id="linkinput" placeholder="Cole o seu link aqui"/>
              <Button color="warning" id="shortenbtn">Encurtar</Button>
            </FormGroup>
          </Container>
        </Jumbotron>
      </div>

    );
  }
}

export default ShortenerJumbo;
