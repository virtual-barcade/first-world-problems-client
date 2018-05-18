import React from 'react';

const SongLink = ({ songLink }) => (
  <div>
    <a href={songLink} target="_blank">
      Link to Full Track
    </a>
  </div>
);

export default SongLink;
