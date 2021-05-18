import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOption= {
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover:{
        enable: true,
        mode: 'repulse',
          },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
    },
  particles: {
    number: {
      value: 450,
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
    },
  }
}



class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onSubmit = (event) =>{
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles className='particle' params= {particlesOption}/>
        <div className="">
        <Navigation/>
        <Logo/>
        <Rank />
        <ImageLinkForm onInputChange= {this.onInputChange} onSubmit={this.onSubmit}/>
        {/* <FaceRecognition/> */}
        </div>
        
      </div>

    );
  }
}

export default App;
