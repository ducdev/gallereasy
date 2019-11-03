import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { bindActionCreators } from 'redux';

import Item from '../../../common/components/Item';
import {
  loadMore as loadMoreAction,
} from '../redux/actions';

const SearchResultListContainer = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  box-sizing: border-box;
  > div {
    width: 100% !important;
  }
`;

class SearchResultList extends Component {
  render() {
    const {
      searchResult,
      rendered,
      hasMore,
      loadMore,
      className,
    } = this.props;
    return (
      <SearchResultListContainer className={className}>
        <InfiniteScroll
          dataLength={rendered} // This is important field to render the next data
          next={() => loadMore()}
          hasMore={hasMore}
          loader={<p></p>}
          endMessage={<p>That&#39;s all above.</p>}
        >
          {
            searchResult.slice(0, rendered).map((item) => (
              <Item
                isSearch
                key={item.id}
                item={item} />
            ))
          }
        </InfiniteScroll>
      </SearchResultListContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    searchResult,
    keyword,
    searching,
    rendered,
    hasMore,
  } = state.home;
  return {
    searchResult,
    keyword,
    searching,
    rendered,
    hasMore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadMore: bindActionCreators(loadMoreAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);
