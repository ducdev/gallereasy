import { UPDATE_FAVORITE } from './actions';

const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
const initialState = {
  favorite,
  favoriteIds: favorite.map((el) => el.id),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FAVORITE:
      return {
        ...state,
        favorite: action.favorite,
        favoriteIds: action.favorite.map((el) => el.id),
      };
    default: return state;
  }
}
