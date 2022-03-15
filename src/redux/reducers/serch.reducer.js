import searchActionTypes from "../action-types/search-action-types";

const initState = {
  chosenCategory: "general",
  searchText: "",
  categories: [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sport",
    "technology",
  ],
};

const searchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case searchActionTypes.SET_SEARCH_CATEGORY:
      return { ...state, chosenCategory: payload };
    case searchActionTypes.SET_SEARCH_TEXT:
      return { ...state, searchText: payload };

    default:
      return state;
  }
};

export default searchReducer;
