import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Button,
  FormGroup,
  Input } from 'reactstrap';


export class ShortenerJumbo extends Component {
  constructor(props){
    super(props);

    this.state = {
      url:'',
      btnText:'Encurtar',
    };
    this.shortenLink = this.shortenLink.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    this.setState({url: event.target.value});
    if(this.state.url === ''){
      this.setState({btnText:'Encurtar'});
    }
  }

  shortenLink = () => {
    if(this.state.url !== ''){
      this.setState({btnText : 'Copiar', url:'http://chr.dc/staticlink'});

    }

    if(this.state.btnText === 'Copiar' && this.state.url !== ''){
      this.setState({btnText : 'Encurtar', url: ''});
    }
    console.log(this.state.url);
  }




  render(){
    const textStyle = {color:'white', fontFamily:'Roboto'};

    const inputBefore = {
      width: '30%',
      backgroundColor: 'inherit',
      color: '#FF6E15',
      fontFamily: 'Roboto',

    }


    const btn = {
      borderRadius: '1px',
      color:'white',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      backgroundColor: '#FF6E15',
      borderStyle: 'none'

    }


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
              <div className="customInput">
                <Input
                    style={inputBefore}
                    onChange={this.handleInput}
                    type="email"
                    name="link"
                    id="shortenerInput"
                    value={this.state.url}
                    placeholder="Cole o seu link aqui"/>
                <Button style={btn} color="warning" id="shortenbtn" onClick={this.shortenLink}>{this.state.btnText}</Button>
              </div>
            </FormGroup>
          </Container>
        </Jumbotron>
      </div>

    );
  }
}

export default ShortenerJumbo;
