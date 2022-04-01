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

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { numberRes: 0 };
  }

  callIncrease() {
    fetch("http://localhost:9000/increase")
    .then(res => res.json())
  }

  callRefresh() {
    fetch("http://localhost:9000/refresh")
        .then(res => res.json())
        .then((json) => {this.setState({ numberRes: json.data })});
  }

<<<<<<< HEAD
  render(){
    const {numberRes} = this.state;
      return(<div className="App">
        <BackgroundCat/>
        <h is="h">{this.state.numberRes}</h>
        <br/>
        <button onClick={this.callIncrease}>increase</button>
        <br/>
        <button onClick={this.callRefresh}>refresh</button>
      </div>);
    }
=======
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
>>>>>>> cea51a5b08e92264dcd2a7bd91aadc97e3e3fe6f
}

export default App;
