import { combineReducers } from 'redux';
import { favoriteReducers } from './modules/Favorite';
import { homeReducers } from './modules/Home';

const rootReducer = combineReducers({
  home: homeReducers,
  favorite: favoriteReducers,
});

export default rootReducer;
