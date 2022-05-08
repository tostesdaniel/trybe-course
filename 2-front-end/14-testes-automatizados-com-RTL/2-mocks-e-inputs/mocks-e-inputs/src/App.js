import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dogImage: undefined,
    };
  }

  componentDidMount() {
    const dogImage = this.fetchDogImage();
    this.setState({
      dogImage,
    });
  }

  fetchDogImage = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const { message } = await response.json();
    console.log(message);
    this.setState({
      dogImage: message,
    });
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.dogImage} alt="Just a dog" />
      </div>
    );
  }
}

export default App;
