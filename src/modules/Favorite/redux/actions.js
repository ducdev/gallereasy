
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export const updateFavorite = (favorite) => (dispatch) => {
  dispatch({ type: UPDATE_FAVORITE, favorite });
};

export const remove = (id) => (dispatch) => {
  const rawFavorite = localStorage.getItem('favorite');
  let favorite = JSON.parse(rawFavorite);
  favorite = favorite.filter((el) => el.id !== id);
  localStorage.setItem('favorite', JSON.stringify(favorite));
  dispatch(updateFavorite(favorite));
};
