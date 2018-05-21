import React from 'react';

const SongControls = ({ songUrl }) => (
  <div className="song-card-element">
    <audio controls="controls" autoPlay src={songUrl} />
  </div>
);

export default SongControls;
