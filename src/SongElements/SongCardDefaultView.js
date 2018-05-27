import React from 'react';
import './SongCardDefaultView.css';

const SongCardDefaultView = () => (
  <div className="flex-container-column-left-align song-card-default-view">
    <p className="intro-text">
      Enter a first world problem, listen to a sad song! Let's wallow in our
      sadness for a bit.
    </p>
    <p className="intro-text">
      Too lazy to come up with a problem? Just hit random to submit a random
      problem!
    </p>
    <p className="intro-text">
      Autoplay is disabled by default so as to not accidentally disturb your
      co-workers. For best effect however, you ought to enable it.
    </p>
  </div>
);

export default SongCardDefaultView;
