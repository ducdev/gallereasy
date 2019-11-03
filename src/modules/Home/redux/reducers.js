import {
  SEARCH,
  SEARCH_OK,
  SEARCH_FAIL,
  LOAD_MORE,
  NO_MORE,
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
        searchResult: state.searchResult.concat(action.searchResult),
        isFail: false,
        hasMore: action.searchResult.length > 0,
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
        searching: true,
        rendered: state.rendered + 8,
        hasMore: true,
      };
    case NO_MORE:
      return {
        ...state,
        hasMore: false,
      };
    default: return state;
  }
}
