import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import styled, { createGlobalStyle } from 'styled-components';

import { Home, Favorite } from './modules';
import rootReducer from './rootReducer';
import Navbar from './common/components/Navbar';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
  button {
    border: none;
    cursor: pointer;
  }
  input, textarea, button {
    outline: none;
  }
`;

const AppContainer = styled.div`
  padding: 0 15px;
  max-width: 1024px;
  margin: 0 auto;
`;
const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorite" component={Favorite} />
            <Route component={() => (<div>404 Not found</div>)} />
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
