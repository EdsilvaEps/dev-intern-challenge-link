import React, { Component } from 'react';
import { HitsJumbo } from '../components/HitsJumbo';

// TODO: replace this with JSON file
const mockHits = "35.713.571";

export class HitsBoxContainer extends Component {
  constructor(props){
    super(props);
    this.state = {hits: mockHits};
  }

  render(){
    return <HitsJumbo hits={this.state.hits} />;
  }
}

export default HitsBoxContainer;
