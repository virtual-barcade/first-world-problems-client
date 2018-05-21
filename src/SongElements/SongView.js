import React from 'react';
import SongCard from './SongCard';

const SongView = ({ song, autoplayEnabled }) => (
  <div>
    <SongCard song={song} key={song.id} autoplayEnabled={autoplayEnabled} />
  </div>
);

export default SongView;
