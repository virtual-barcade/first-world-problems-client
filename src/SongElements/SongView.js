import React, { Component } from 'react';
import SongCard from './SongCard';
import ToggleSwitch from './ToggleSwitch';
import SongCardDefaultView from './SongCardDefaultView';
import './SongView.css';

class SongView extends Component {
  constructor(props) {
    super(props);

    this.state = { autoplay: false };
  }

  toggleAutoplay = () => {
    this.setState({
      autoplay: !this.state.autoplay,
    });
  };

  render() {
    const { song, currentProblem } = this.props;
    const { autoplay } = this.state;
    return (
      <div className="song-view">
        <div className="flex-container-row-left-align">
          <ToggleSwitch
            toggleAutoplay={this.toggleAutoplay}
            autoplayEnabled={autoplay}
          />
        </div>
        {currentProblem.length ? (
          <p className="current-problem">{currentProblem}</p>
        ) : (
          <div />
        )}
        {Object.keys(song).length ? (
          <SongCard song={song} key={song.id} autoplayEnabled={autoplay} />
        ) : (
          <SongCardDefaultView />
        )}
      </div>
    );
  }
}

export default SongView;
