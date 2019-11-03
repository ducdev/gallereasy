import {
  SEARCH,
  SEARCH_OK,
  SEARCH_FAIL,
  LOAD_MORE,
} from './actions';

const initialState = {
  searchResult: [],
  searching: false,
  keyword: null,
  hasMore: true,
  rendered: 8,
  editingItem: null,
  isFail: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        keyword: action.keyword,
        searching: true,
        rendered: 8,
        hasMore: true,
        searchResult: [],
      };
    case SEARCH_OK:
      return {
        ...state,
        searching: false,
        searchResult: action.searchResult,
        isFail: false,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        searching: false,
        isFail: true,
      };
    case LOAD_MORE:
      return {
        ...state,
        rendered: state.rendered + 8,
        hasMore: state.searchResult.length === 0 || state.rendered < state.searchResult.length,
      };
    default: return state;
  }
}
