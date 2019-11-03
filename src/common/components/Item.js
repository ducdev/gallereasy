import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import {
  remove as removeAction,
} from '../../modules/Favorite/redux/actions';

import {
  addToFavorite as addToFavoriteAction,
} from '../../modules/Home/redux/actions';

const ItemContainer = styled.div`
  width: calc(25% - 20px);
  height: auto;
  display: inline-block;
  position: relative;
  padding: 10px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
  &:hover {
    > button {
      opacity: 0.5;
    }
  }
`;

const Heart = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: none;
  font-size: 30px;
  opacity: 0;
  &.favorite {
    opacity: 1 !important;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 168px;
  background: ${(props) => `url(${props.url}) no-repeat center center`};
  background-size: cover;
  position: relative;
`;

class Item extends Component {
  handleRemove = () => {
    const { remove, item } = this.props;
    remove(item.id);
  }

  handleLike = () => {
    const { like, item } = this.props;
    like(item.id);
  }

  render() {
    const {
      item, addToFavorite, favoriteIds, remove,
    } = this.props;
    return (
      <ItemContainer>
        <Thumbnail className="thumbnail" url={item.images.preview_gif.url} />
        <Heart
          className={favoriteIds.includes(item.id) ? 'favorite' : ''}
          onClick={() => (favoriteIds.includes(item.id) ? remove(item.id) : addToFavorite(item))}
        >
          ❤️
        </Heart>
      </ItemContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  remove: bindActionCreators(removeAction, dispatch),
  addToFavorite: bindActionCreators(addToFavoriteAction, dispatch),
});

const mapStateToProps = (state) => {
  const { favorite } = state.home;
  const { favoriteIds } = state.favorite;
  return {
    favorite,
    favoriteIds,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
