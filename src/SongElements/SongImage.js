import React from 'react';

const SongImage = ({ songImage }) => (
  <div>
    <img src={songImage} alt="Unable to show album art." />
  </div>
);

export default SongImage;
