import React from "react";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
}

export default NewsCard;
