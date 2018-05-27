import React from 'react';
import './SongData.css';

const SongData = ({ album, artists, name }) => {
  const artistInfo = artists.map(artist => artist.name).join(', ');
  return (
    <div className="flex-container-column-left-align song-data">
      <span className="song-info">Title: {name}</span>
      <span className="song-info">Artist: {artistInfo}</span>
      <span className="song-info">Album: {album.name}</span>
    </div>
  );
};

export default SongData;
