import { combineReducers } from "redux";
import searchReducer from "./serch.reducer";
import articlesReducer from "./articles.reduser";

const rootReducer = combineReducers({
  search: searchReducer,
  articles: articlesReducer,
});

export default rootReducer;
