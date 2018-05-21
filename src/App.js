import React, { Component } from 'react';
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
      <div className="app">
        <header className="header">
          <h1 className="title">First World Problems</h1>
        </header>
        <div className="space" />
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
