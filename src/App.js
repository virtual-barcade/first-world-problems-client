import React, { Component } from 'react';
import axios from 'axios';
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
    this.setState(
      {
        song: sampleData,
      },
      () => console.log(this.state.song),
    );
  };

  onSearchTermChange = term => {
    this.setState({ term });
  };

  querySpotify = event => {
    event.preventDefault();
    axios
      .get(
        `https://first-world-problems-api.herokuapp.com/api/song/${
          this.state.term
        }`,
      )
      .then(song => {
        this.setState(
          {
            song: song.data,
            term: '',
            currentProblem: this.state.term,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => {
        console.error('Error retrieving song: ', err);
      });
  };

  generateRandomProblem = event => {
    event.preventDefault();
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
          generateRandomProblem={this.generateRandomProblem}
        />
        <SongView song={song} currentProblem={currentProblem} />
      </div>
    );
  };
}

export default App;
