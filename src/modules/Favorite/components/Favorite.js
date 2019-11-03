import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Item from '../../../common/components/Item';

const FavoriteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
`;

class Favorite extends Component {
  render() {
    const { favorite } = this.props;
    if (favorite.length === 0) return <p>Nothing to show here!</p>;
    return (
      <FavoriteContainer>
        {
          favorite
          && favorite.length > 0
          && favorite.map((item) => (
            <Item
              isSearch={false}
              key={item.id}
              item={item} />
          ))
        }
      </FavoriteContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    favorite,
  } = state.favorite;
  return {
    favorite,
  };
};

export default connect(mapStateToProps)(Favorite);
