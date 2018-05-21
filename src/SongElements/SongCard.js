import React from 'react';
import SongImage from './SongImage';
import SongControls from './SongControls';
import SongLink from './SongLink';

const SongCard = ({ song, autoplayEnabled }) => (
  <div className="flex-container">
    <SongImage songImage={song.album.images[0].url} />
    <SongControls
      songUrl={song.preview_url}
      autoplayEnabled={autoplayEnabled}
    />
    <SongLink songLink={song.external_urls.spotify} />
  </div>
);

export default SongCard;
