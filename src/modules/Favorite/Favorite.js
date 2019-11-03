import React from 'react';
import styled from 'styled-components';
import Favorite from './components/Favorite';

const FavoriteContainer = styled.div`
  padding-top: 73px;
`;

const FavoriteComponent = () => (
  <FavoriteContainer>
    <Favorite />
  </FavoriteContainer>
);

export default FavoriteComponent;
