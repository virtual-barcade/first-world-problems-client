import React, { Component } from 'react';
import SongCard from './SongCard';
import ToggleSwitch from '../ToggleSwitch';

class SongView extends Component {
  constructor(props) {
    super(props);

    this.state = { autoplay: false };
  }

  toggleAutoplay = () => {
    this.setState(
      {
        autoplay: !this.state.autoplay,
      },
      () => console.log(this.state),
    );
  };

  render() {
    const { song, currentProblem } = this.props;
    const { autoplay } = this.state;
    if (Object.keys(song).length === 0) {
      return <div />;
    } else {
      return (
        <div>
          <ToggleSwitch
            toggleAutoplay={this.toggleAutoplay}
            autoplayEnabled={autoplay}
          />
          <p>{currentProblem}</p>
          <SongCard song={song} key={song.id} autoplayEnabled={autoplay} />
        </div>
      );
    }
  }
}

export default SongView;
