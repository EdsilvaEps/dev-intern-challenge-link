import React, { Component } from 'react';
import { TopFive } from '../components/TopFive';

// TODO: Replace this with JSON file
const items = [
  {
    "id": "23094",
    "hits": 5,
    "url": "http://globo.com",
    "shortUrl": "http://chr.dc/9dtr4"
  },
  {
    "id": "76291",
    "hits": 4,
    "url": "http://google.com",
    "shortUrl": "http://chr.dc/aUx71"
  },
  {
    "id": "66761",
    "hits": 7,
    "url": "http://terra.com.br",
    "shortUrl": "http://chr.dc/u9jh3"
  },
  {
    "id": "70001",
    "hits": 1,
    "url": "http://facebook.com",
    "shortUrl": "http://chr.dc/qy61p"
  },
  {
    "id": "21220",
    "hits": 2,
    "url": "http://diariocatarinense.com.br",
    "shortUrl": "http://chr.dc/87itr"
  }
];

export class TopFiveContainer extends Component {
  constructor(props){
    super(props);
    this.state = {topfive: items};
  }

  render(){
    return <TopFive items={this.state.topfive} />;
  }

}

export default TopFiveContainer;
