import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import cat_c from './img/popcat_mouse_close.png'
import cat_o from './img/popcat_mouse_open.png'
// import BackgroundCat from './BackgroundCat.js';
// import BackgroundCat2 from './BackgroundCat2.js';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
const imagePath = {
  close: cat_c,
  open: cat_o
};

var number = 0;
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  getImageName(){ 
    return(this.state.isOff ? 'close' : 'open' )
  }

  handlePressIn() {
    this.setState({isOff:false});
  }

  handlePressOut() {
    this.setState({isOff:true});
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
    const imageName = this.getImageName();
    return (
        <div className="App">
          <Pressable onClick={this.callIncrease} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
          <img is="cat" id="cat" onClick={this.handleClick} src={imagePath[imageName]}  alt="cat"></img>
          </Pressable>
          <h is="h">{number}</h>
          <br/>
          <button onClick={this.callRefresh}>refresh</button>
        </div>
    );
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: "#111",
  },
  text: {
    backgroundColor: "transparent",
    color: "#111",
  },
  bgFill: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default App;
