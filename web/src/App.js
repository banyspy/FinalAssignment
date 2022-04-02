import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Top from './Top.js';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      input:[],
      numberUser:0,
      numberTotal: 0,
      isOff: true};
    this.callRefresh = this.callRefresh.bind(this);
  }

  



  getImageName(){ 
    return(this.state.isOff ? 'close' : 'open' )
  }

  callIncrease() {
    fetch("http://localhost:9000/increase")
  }

  callRefresh = () => {
    fetch("http://localhost:9000/refresh")
        .then((res) => {res.json()
        .then((json) => {this.setState({ numberTotal: json.data })})});
      console.log(this.state.numberTotal)
  }

  componentDidMount() {
    this.callRefresh();
  }

  handleClick(){
    this.setState({numberRes: this.state.numberRes + 1});
    this.callIncrease();
  }

  render(){
    const imageName = this.getImageName();
      return(<div className="App">
        <Top/>
        <Pressable
            //onPressIn={new Audio("./sound/sound_open.mp3").play()}
            //onPressOut={new Audio("./sound/sound_close.mp3").play()}
            onPress={() => {this.callIncrease();this.callRefresh();this.setState({numberUser: this.state.numberUser + 1})} }
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
            {({ pressed }) => (
              <Text style={styles.text}>
              <Image is="cat" id="cat" source=  {pressed ?  require('./img/popcat_mouse_open.png') : require('./img/popcat_mouse_close.png') } style={{width: 400, height: 400}} alt="cat" />
              </Text>
            )}
          </Pressable>
        <br/>
        <br/>
        <h is="h">Current for this user: {this.state.numberUser}</h>
        <br/>
        <br/>
        <h is="h">Total amount: {this.state.numberTotal}</h>
        <br/>
        <br/>
        <button onClick={this.callRefresh}>refresh</button>
      </div>)
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});
export default App;
