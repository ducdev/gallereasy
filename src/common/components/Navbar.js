import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const NavbarContainer = styled.div`
  height: 65px;
  border: none;
  border-bottom: 1px solid #CECED2;
  display: flex;
  font-weight: lighter;
  a {
    text-decoration: none;
    color: unset;
  }
`;

const Logo = styled.div`
  padding: 15px;
  font-size: 30px;
  width: 170px;
  div {
    border-right: 1px solid #CECED2;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  > * {
    padding: 0 15px;
    font-size: 30px;
    &.inactive {
      color: #CECED2;
    }
  }
`;

const Navbar = ({ location, favoriteIds }) => (
  <NavbarContainer>
    <Link to="/">
      <Logo>
        <div>
          Galler<b>easy</b>
        </div>
      </Logo>
    </Link>
    <Links>
      <Link to="/" className={location.pathname !== '/' ? 'inactive' : ''}>Search</Link>
      <Link to="/favorite" className={location.pathname !== '/favorite' ? 'inactive' : ''}>Favorites&nbsp;({favoriteIds.length})</Link>
    </Links>
  </NavbarContainer>
);

const mapStateToProps = (state) => {
  const {
    favoriteIds,
  } = state.favorite;
  return {
    favoriteIds,
  };
};


export default withRouter(connect(mapStateToProps)(Navbar));
