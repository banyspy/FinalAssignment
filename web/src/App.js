
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import cat_c from './img/popcat_mouse_close.png'
import cat_o from './img/popcat_mouse_open.png'
// import BackgroundCat from './BackgroundCat.js';
// import BackgroundCat2 from './BackgroundCat2.js';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';

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
    this.state = {
      apiResponse: "" , 
      isOff: true
    };
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
    // var icon_cat = this.state.isOff ?
    return (
        <div className="App">
          {/* <Image source={icon_cat} style={{width: 55, height: 55}} />
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={this.callIncrease} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
              <Text>Pop</Text>
            </TouchableOpacity>
          </View> */}
          <Pressable
            onPress={this.callIncrease}
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
          {/* <Pressable onClick={this.callIncrease} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
            <Image is="cat" id="cat" source={icon_cat} style={{width: 400, height: 400}} alt="cat" />
          </Pressable> */}
          <h is="h">{number}</h>
          <br/>
          <button onClick={this.callRefresh}>refresh</button>
        </div>
    );
  };
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
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#859a9b',
//     borderRadius: 20, //the radius on the corner
//     padding: 100,
//     marginBottom: 20, //padding below the image
//     shadowColor: '#303838',
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//     shadowOpacity: 0.35,
//   },
// });

export default App;
