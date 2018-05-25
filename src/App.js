import React, { Component } from 'react';
import { fetchSong, sampleFirstWorldProblems } from './services/spotify';
import sampleData from './sample-data.json';
import SongView from './SongElements/SongView';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: {},
      term: '',
      currentProblem: '',
    };
  }

  componentDidMount = () => {
    this.setState({
      song: sampleData,
    });
  };

  onSearchTermChange = term => this.setState({ term });

  setAppState = (song, term, currentProblem) => {
    this.setState(
      {
        song,
        term,
        currentProblem,
      },
      () => console.log(this.state),
    );
  };

  querySpotify = event => {
    event.preventDefault();
    fetchSong(this.state.term)
      .then(song => this.setAppState(song.data, '', this.state.term))
      .catch(err => console.error('Error retrieving song: ', err));
  };

  generateRandomProblemAndQuery = event => {
    event.preventDefault();
    const randIndex = Math.floor(
      Math.random() * sampleFirstWorldProblems.length,
    );
    const problem = sampleFirstWorldProblems[randIndex];
    fetchSong(problem)
      .then(song => this.setAppState(song.data, '', problem))
      .catch(err => console.error('Error retrieving song: ', err));
  };

  render = () => {
    const { currentProblem, term, song } = this.state;
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">First World Problems</h1>
        </header>
        <div className="space" />
        <SearchBar
          term={term}
          onSearchTermChange={this.onSearchTermChange}
          querySpotify={this.querySpotify}
          generateRandomProblemAndQuery={this.generateRandomProblemAndQuery}
        />
        <SongView song={song} currentProblem={currentProblem} />
      </div>
    );
  };
}

export default App;
