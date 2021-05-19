import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import SignIn from "./components/SignIn/SignIn";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "c7cf824d15434ec8a42f9d9c3e7180cd",
});


const particlesOption = {
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  particles: {
    number: {
      value: 450,
      enable: true,
      value_area: 800,
    },
    color: {
      value: "#cd2657",
    },
    stroke: {
      width: 5,
      color: "#f7f71f",
    },
    image: {
      type: "polygon",
    },
    size: {
      anim: {
        enable: true,
        speed: 5,
      },
    },
    move: {
      enable: true,
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  faceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = (event) => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, this.state.input
      )
      .then(response => this.faceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
};

  render() {
    return (
      <div className="App">
        <Particles className="particle" params={particlesOption} />
        <div className="">
          <Navigation />
          <SignIn/>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box= {this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
