import React, { Component } from 'react';
import SongCard from './SongCard';
import ToggleSwitch from './ToggleSwitch';
import SongCardDefaultView from './SongCardDefaultView';

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
      <div>
        <ToggleSwitch
          toggleAutoplay={this.toggleAutoplay}
          autoplayEnabled={autoplay}
        />
        <p>{currentProblem}</p>
        {Object.keys(song).length === 0 ? (
          <SongCardDefaultView />
        ) : (
          <SongCard song={song} key={song.id} autoplayEnabled={autoplay} />
        )}
      </div>
    );
  }
}

export default SongView;
