import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '473f4ea174fd1c56df54cf47f61d8dc8';
      const url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <h1>News Dashboard</h1>
      <div className="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default App;
