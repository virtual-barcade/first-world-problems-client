import React from 'react';

const SongImage = ({ songImage }) => (
  <div className="img-container song-card-element">
    <img src={songImage} alt="Unable to show album art." />
  </div>
);

export default SongImage;
