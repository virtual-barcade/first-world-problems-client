import React from 'react';

const SongControls = ({ songUrl }) => (
  <div>
    <audio controls="controls" autoPlay src={songUrl} />
  </div>
);

export default SongControls;
