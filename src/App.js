import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
 
const particlesOption= {
  particles: {
    number: {
      value: 250,
      enable: true,
      value_area: 800
    },
    color: {
      value:'#cd2657',
    },
    stroke: {
      width: 5,
      color : '#f7f71f',
    },
    image:{
      type: 'polygon'
    },
    size:{
      anim:{
      enable: true,
      speed :5
      }
    },
    move:{
      enable: true
    }
  }
 
}



class App extends Component{
  render() {
    return (
      <div className="App">
        <Particles className='particle' params= {particlesOption}/>
        <Navigation/>
        <Logo/>
        <Rank />
        <ImageLinkForm/>
        {/* <FaceRecognition/> */}
      </div>

    );
  }
}

export default App;
