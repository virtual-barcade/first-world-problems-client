import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sampleData from './sample-data.json';
import SongView from './SongElements/SongView';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: {},
      term: '',
    };

    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.querySpotify = this.querySpotify.bind(this);
    this.generateRandomProblem = this.generateRandomProblem.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        song: sampleData,
      },
      () => console.log(this.state.song),
    );
  }

  onSearchTermChange(term) {
    this.setState({ term });
  }

  querySpotify(event) {
    console.log('Firing submit event');
    event.preventDefault();
  }

  generateRandomProblem(event) {
    console.log('Firing button event');
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">placeholder spaceholder</p>
        <SearchBar
          term={this.state.term}
          onSearchTermChange={this.onSearchTermChange}
          querySpotify={this.querySpotify}
          generateRandomProblem={this.generateRandomProblem}
        />
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
