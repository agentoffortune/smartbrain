import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/SignIn";
import "./App.css";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "cd5b1703499f4d39bed9201ead40f54f"
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: "",
      route: "signIn"
    };
  }
  calculateFaceLocation = data => {
    console.log(data);
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const imageLeft = Number(
      image.offsetLeft - image.scrollLeft + image.clientLeft
    );
    const imageTop = Number(
      image.offsetTop - image.scrollTop + image.clientTop
    );
    console.log(imageTop, imageLeft, width, height);
    return {
      leftCol: imageLeft + width * clarifaiFace.left_col,
      topRow: imageTop + height * clarifaiFace.top_row,
      rightCol: width * clarifaiFace.right_col,
      bottomRow: height * clarifaiFace.bottom_row,
      boxWidth:
        width -
        (clarifaiFace.left_col * width + (1 - clarifaiFace.right_col) * width),
      boxHeight:
        height -
        (clarifaiFace.top_row * height + (1 - clarifaiFace.bottom_row) * height)
    };
  };
  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  onRouteChange = route => {
    this.setState({ route: route });
  };
  onSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));
  };
  componentDidUpdate() {
    console.log(this.state.box);
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        {this.state.route === "home" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageURL={this.state.imageURL}
            />
          </div>
        ) : this.state.route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
