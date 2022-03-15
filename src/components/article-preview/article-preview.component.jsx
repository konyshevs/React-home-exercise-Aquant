import "./article-preview.styles.css";

import React from "react";

const articlePreview = ({ article }) => {
  return (
    <div className="article-preview">
      <img
        className="article-preview-img"
        src={
          article.urlToImage ||
          "https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png"
        }
        alt={article.title}
      />
      <h3 className="article-preview-titel">{article.title}</h3>
      <p className="article-preview-data">{article.publishedAt}</p>
      <p className="article-preview-description">{article.description}</p>
      <button className="article-preview-more-btn">Read More</button>
    </div>
  );
};

export default articlePreview;
