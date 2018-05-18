import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sampleData from './sample-data.json';
import SongView from './SongElements/SongView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: {},
    };
  }

  componentDidMount() {
    this.setState(
      {
        song: sampleData,
      },
      () => console.log(this.state.song),
    );
  }

  render() {
    console.log(Object.keys(this.state.song).length);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {Object.keys(this.state.song).length === 0 ? (
          <div />
        ) : (
          <SongView song={this.state.song} />
        )}
      </div>
    );
  }
}

export default App;
