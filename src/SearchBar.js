import React from 'react';
import Button from './Button';

const SearchBar = ({
  term,
  onSearchTermChange,
  querySpotify,
  generateRandomProblemAndQuery,
}) => (
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
      <div className="flex-container-row">
        <Button message={'Search'} type={'submit'} />
        <Button
          message={'Random'}
          type={'button'}
          callback={generateRandomProblemAndQuery}
        />
      </div>
    </form>
  </div>
);

export default SearchBar;
