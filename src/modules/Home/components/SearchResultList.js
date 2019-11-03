import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import Item from '../../../common/components/Item';
import {
  loadMore as loadMoreAction,
} from '../redux/actions';

const SearchResultListContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const LoadMore = styled.button`
  font-size: 16px;
  border: 1px solid black;
  margin: 15px auto;
  padding: 10px;
`;

class SearchResultList extends Component {
  render() {
    const {
      searchResult,
      hasMore,
      loadMore,
      className,
      searching,
    } = this.props;
    return (
      <>
        <SearchResultListContainer className={className}>
          {
            searchResult.map((item) => (
              <Item
                isSearch
                key={item.id}
                item={item} />
            ))
          }
        </SearchResultListContainer>
        {
          hasMore && searchResult.length >= 8 && (
            <LoadMore
              disabled={searching}
              onClick={() => loadMore()}
            >
              {searching ? 'Loading...' : 'Load more'}
            </LoadMore>
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    searchResult,
    keyword,
    searching,
    hasMore,
  } = state.home;
  return {
    searchResult,
    keyword,
    searching,
    hasMore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadMore: bindActionCreators(loadMoreAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);
