import React from 'react';
import SongImage from './SongImage';
import SongData from './SongData';
import SongControls from './SongControls';
import SongLink from './SongLink';

const SongCard = ({ song, autoplayEnabled }) => (
  <div className="flex-container-column">
    <SongImage songImage={song.album.images[0].url} />
    <SongData album={song.album} artists={song.artists} name={song.name} />
    <SongControls
      songUrl={song.preview_url}
      autoplayEnabled={autoplayEnabled}
    />
    <SongLink songLink={song.external_urls.spotify} />
  </div>
);

export default SongCard;
