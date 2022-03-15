import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticlePreview from "../article-preview/article-preview.component";
import { fetchArticles } from "../../redux/actions/articles-actions";
import "./articles-list.styles.css";

const ArticlesList = () => {
  const articles = useSelector((state) => state.articles.articles);
  const isFetching = useSelector((state) => state.articles.isFetching);
  const searchText = useSelector((state) => state.search.searchText);
  const searchCategory = useSelector((state) => state.search.chosenCategory);
  const dispatch = useDispatch();
  const qUrl = `https://newsapi.org/v2/everything?q="${searchText}"&searchIn&sortBy=popularity&apiKey=b1f7b575a70e481bba97fcf4165743ee`;
  const categoryUrl = `https://newsapi.org/v2/top-headlines?category=${searchCategory}&language=en&apiKey=b1f7b575a70e481bba97fcf4165743ee`;

  useEffect(() => {
    // if (isFetching) return;
    if (!searchText) return;
    dispatch(fetchArticles(qUrl));
  }, [searchText]);

  useEffect(() => {
    // if (isFetching) return;
    dispatch(fetchArticles(categoryUrl));
  }, [searchCategory]);

  return (
    <div className="articles-list">
      {articles.map((article, i) => (
        <ArticlePreview key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
