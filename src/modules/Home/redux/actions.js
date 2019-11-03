import axios from 'axios';
import { updateFavorite } from '../../Favorite/redux/actions';

export const SEARCH = 'SEARCH';
export const SEARCH_OK = 'SEARCH_OK';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const LOAD_MORE = 'LOAD_MORE';
export const NO_MORE = 'NO_MORE';
export const API_KEY = 'zaFhcqH1Dbjc704lccPswElrYQQcUI6r';

export const search = (keyword) => (dispatch) => {
  if (keyword.length > 0) {
    dispatch({ type: SEARCH, keyword });
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=8&offset=0&q=${keyword}&rating=G&lang=en`)
      .then((res) => dispatch({ type: SEARCH_OK, searchResult: res.data.data }))
      .catch((err) => dispatch({ type: SEARCH_FAIL, err }));
  }
};

export const addToFavorite = (item) => (dispatch) => {
  const rawFavorite = localStorage.getItem('favorite');
  let favorite = JSON.parse(rawFavorite);
  if (!favorite || !favorite.length) {
    favorite = [];
  }
  if (favorite.length === 0
    || !favorite.find((el) => el.id === item.id)) {
    favorite.push(item);
  }
  localStorage.setItem('favorite', JSON.stringify(favorite));
  dispatch(updateFavorite(favorite));
};

export const loadMore = () => (dispatch, getState) => {
  const { keyword, searchResult } = getState().home;
  if (keyword && keyword.length >= 0) {
    dispatch({ type: LOAD_MORE });
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=8&offset=${searchResult.length || 0}&q=${keyword}&rating=G&lang=en`)
      .then((res) => dispatch({ type: SEARCH_OK, searchResult: res.data.data }))
      .catch((err) => dispatch({ type: SEARCH_FAIL, err }));
  }
};
