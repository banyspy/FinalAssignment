import cat_c from './img/popcat_mouse_close.png'
import cat_o from './img/popcat_mouse_open.png'
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const imagePath = {
    close: cat_c,
    open: cat_o
}

class BackgroundCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isOff: true};
  }

  handleClick() {
    this.setState({isOff:!this.state.isOff});
  }

  getImageName = () => this.state.isOff ? 'close' : 'open'

  render() {
    const imageName = this.getImageName();
    return (
      <img is="cat" id="cat" onClick={this.handleClick} src={imagePath[imageName]}></img>
    );
  }
}

export default BackgroundCat;