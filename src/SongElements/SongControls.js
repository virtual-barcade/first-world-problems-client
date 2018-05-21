import React from 'react';

const SongControls = ({ songUrl, autoplayEnabled }) => (
  <div className="song-card-element">
    <audio controls="controls" autoPlay={autoplayEnabled} src={songUrl} />
  </div>
);

export default SongControls;
