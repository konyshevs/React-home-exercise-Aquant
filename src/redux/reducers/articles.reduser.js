import articlesActionTypes from "../action-types/articles-action-types";

const initState = {
  articles: [],
  isFetching: false,
  errorMessage: undefined,
};

const articlesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case articlesActionTypes.SET_ARTICLES:
      return { ...state, articles: payload };
    case articlesActionTypes.FETCH_ARTICLES_START:
      return { ...state, isFetching: true };

    case articlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return { ...state, isFetching: false, articles: payload };

    case articlesActionTypes.FETCH_ARTICLES_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};

export default articlesReducer;
