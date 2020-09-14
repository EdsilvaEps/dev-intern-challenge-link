import React, { Component } from 'react';
import { HitsJumbo } from '../components/HitsJumbo';

// TODO: replace this with JSON file
const mockHits = "35.713.571";
const localApiPath = "http://localhost:8000/hits";

export class HitsBoxContainer extends Component {
  constructor(props){
    super(props);
    this.state = {hits: mockHits};
  }

  componentDidMount(){
    fetch(localApiPath)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({hits: data.hits})
      })
      .catch(console.log)
  }

  render(){
    return <HitsJumbo hits={this.state.hits} />;
  }
}

export default HitsBoxContainer;
