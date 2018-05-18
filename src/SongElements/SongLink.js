import React from 'react';

const SongLink = ({ songLink }) => (
  <div className="song-card-element">
    <a href={songLink} target="_blank">
      Link to Full Track
    </a>
  </div>
);

export default SongLink;
