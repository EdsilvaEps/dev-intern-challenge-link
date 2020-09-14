import React, { Component } from 'react';
import { TopFive } from '../components/TopFive';

const items = [
  {
    "id": "1",
    "hits": 0,
    "url": "http://globo.com",
    "shortUrl": "http://chr.dc/9dtr4"
  }
];

const localApiPath = "http://localhost:8000/links";

export class TopFiveContainer extends Component {
  constructor(props){
    super(props);
    this.state = {topfive: items};
  }

  componentDidMount(){
    fetch(localApiPath)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({topfive: data.data})
      })
      .catch(console.log)
  }

  render(){
    return <TopFive items={this.state.topfive} />;
  }

}

export default TopFiveContainer;
