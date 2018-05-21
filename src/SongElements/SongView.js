import React from 'react';
import SongCard from './SongCard';

const SongView = ({ song }) => (
  <div>
    <SongCard song={song} key={song.id} />
  </div>
);

export default SongView;
