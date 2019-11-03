import React from 'react';
import styled from 'styled-components';

import SearchInput from './components/SearchInput';
import SearchResultList from './components/SearchResultList';


const SearchContainer = styled.div`
  padding-top: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
  }
  .search-input {
    max-width: 600px;
  }
`;

const Search = () => (
  <SearchContainer>
    <SearchInput className="search-input" />
    <SearchResultList />
  </SearchContainer>
);

export default Search;
