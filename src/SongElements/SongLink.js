import React from 'react';

const SongLink = ({ songLink }) => (
  <div className="song-card-element">
    <a href={songLink} target="_blank">
      Open in Spotify
    </a>
  </div>
);

export default SongLink;
