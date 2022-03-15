import searchActionTypes from "../action-types/search-action-types";

export const setSearchText = (text) => ({
  type: searchActionTypes.SET_SEARCH_TEXT,
  payload: text,
  categorys: [""],
});

export const setSearchCategory = (category) => ({
  type: searchActionTypes.SET_SEARCH_CATEGORY,
  payload: category,
});
