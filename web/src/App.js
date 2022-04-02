import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Top from './Top.js';
import {ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { input:[],numberUser:0,numberTotal: 0 ,isOff: true};
    this.callRefresh = this.callRefresh.bind(this);
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

  render(){
    return(<div className="App">
      <View>
        <ImageBackground source={{uri:"./img/Bliss.jpg"}} resizeMode="contain" style={styles.ImageBackground}> {/*currently background image doesn't work whatever I did */}
          <Top/>
          <Pressable
            onPress={() => {this.callIncrease();this.callRefresh();this.setState({numberUser: this.state.numberUser + 1})} }>
              {({ pressed }) => (
                <Text>
                <Image is="cat" id="cat" source={pressed ?  require('./img/popcat_mouse_open.png') : require('./img/popcat_mouse_close.png') } style={{width: 400, height: 400}} alt="cat" />
                </Text>
              )}
            </Pressable>
          <br/>
          <br/>
          <h is="h">Current for this usage: {this.state.numberUser}</h>
          <br/>
          <br/>
          <h is="h">Total amount: {this.state.numberTotal}</h>
          <br/>
          <br/>
          <button onClick={this.callRefresh}>refresh</button>
        </ImageBackground>
      </View>
    </div>)
  }
}
const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});
export default App;
