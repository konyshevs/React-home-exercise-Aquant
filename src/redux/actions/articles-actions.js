import articlesActionTypes from "../action-types/articles-action-types";
import axios from "axios";

export const setArticles = (articles) => ({
  type: articlesActionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticlesStart = () => {
  return {
    type: articlesActionTypes.FETCH_ARTICLES_START,
  };
};

export const fetchArticlesSuccess = (ArticlesMap) => {
  return {
    type: articlesActionTypes.FETCH_ARTICLES_SUCCESS,
    payload: ArticlesMap,
  };
};

export const fetchArticlesFailure = (errorMassage) => {
  return {
    type: articlesActionTypes.FETCH_ARTICLES_FAILURE,
    payload: errorMassage,
  };
};

export const fetchArticles = (url) => async (dispatch) => {
  dispatch(fetchArticlesStart());
  try {
    const res = await axios(url);
    console.log(res);
    const data = res?.data?.sources || res?.data?.articles;
    dispatch(fetchArticlesSuccess(data));
  } catch (e) {
    dispatch(fetchArticlesFailure(e.message));
  }
};
