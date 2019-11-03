import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { search as searchAction } from '../redux/actions';

const StyledDebounceInput = styled(DebounceInput)`
  width: calc(100% - 40px);
  border: none;
  border-bottom: 1px solid #CECED2;
  height: 62px;
  color: black;
  padding: 0 20px;
  font-size: 30px;
  font-weight: lighter;
  &::placeholder {
    color: #CECED2;
  }
`;

const Spinner = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 3px solid lightgrey;
  border-radius: 50%;
  border-top-color: grey;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  top: 15px;
  right: 0;

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`;

const SearchInputComponent = styled.div`
  position: relative;
`;

const Error = styled.div`
  color: red;
  padding: 15px;
`;

const SearchInput = ({
  className, search, searching, isFail,
}) => (
  <SearchInputComponent className={className}>
    <StyledDebounceInput
      minLength="2"
      debounceTimeout="500"
      placeholder="Start searching for GIFs!"
      onChange={(e) => search(e.target.value)}
    />
    {
      searching && <Spinner />
    }
    {
      isFail && <Error>Something wrong!</Error>
    }
  </SearchInputComponent>
);

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(searchAction, dispatch),
});

const mapStateToProps = (state) => {
  const {
    searching,
    isFail,
  } = state.home;
  return {
    isFail,
    searching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
