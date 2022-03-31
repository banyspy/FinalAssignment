import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import cat_c from './img/popcat_mouse_close.png'
import cat_o from './img/popcat_mouse_open.png'
import BackgroundCat from './BackgroundCat.js';


/*
const increase = async () => {
  await axios.get('http://localhost:9000/increase')
  //TODO: add code that make cat open mouth
  number++;
}

const refresh = async () => {
  let result = await axios.get('http://localhost:9000/refresh')
  number = result.data;
}
*/

var number = 0;
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callIncrease() {
    fetch("http://localhost:9000/increase")
  }

  callRefresh() {
    fetch("http://localhost:9000/refresh")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callIncrease();
    this.callRefresh();
  }

  render() {
    return (
        <div className="App">
          <BackgroundCat/>
          <h is="h">{number}</h>
          <br/>
          <button onClick={this.callIncrease}>increase</button>
          <br/>
          <button onClick={this.callRefresh}>refresh</button>
        </div>
    );
  };
}

export default App;
