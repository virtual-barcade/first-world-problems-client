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
        <div>
          <input
            type="text"
            placeholder={"What's yo problem?"}
            value={term}
            size={40}
            onChange={event => onSearchTermChange(event.target.value)}
          />
        </div>
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
