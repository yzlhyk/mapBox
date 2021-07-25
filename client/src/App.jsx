import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

class App extends Component {

  state = {
    visible: true
  }
  render() {

    return (
      <div className="App">
        {this.state.visible ? <ImageSlider /> : null}
        <button onClick={() => {
          this.setState({ visible: false })
        }}>
          hide
        </button>
        <Header title="Hello React!!!" num={5} />
        <Body text="Iam hero" />
        <Counter initialCount={0} />
        <Counter initialCount={10} />
        <ImageSlider />
      </div>
    );
  }
}

export default App;
