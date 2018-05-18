import React from 'react';
import Button from './Button';

const SearchBar = ({
  term,
  onSearchTermChange,
  querySpotify,
  generateRandomProblem,
}) => {
  return (
    <div>
      <form onSubmit={event => querySpotify(event)}>
        <input
          type="text"
          value={term}
          onChange={event => onSearchTermChange(event.target.value)}
        />
        <Button message={'Search'} type={'submit'} />
        <Button
          message={'Random'}
          type={'button'}
          callback={generateRandomProblem}
        />
      </form>
    </div>
  );
};

export default SearchBar;
