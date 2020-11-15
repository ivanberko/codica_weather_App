import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { searchForm, searchInput, searchBtn } from './SearchForm.module.css';

const SearchForm = ({ fetchCurrentWeather }) => {
  const [query, setQuery] = useState('');

  const handleChenge = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      fetchCurrentWeather(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={searchForm}>
      <input
        type="text"
        name="query"
        value={query}
        placeholder="Enter the city"
        onChange={handleChenge}
        className={searchInput}
      />
      <button type="submit" className={searchBtn}></button>
    </form>
  );
};

SearchForm.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
};

export default SearchForm;
