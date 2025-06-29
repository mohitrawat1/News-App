// NewsBoard.jsx
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

// <--- Accept language prop here
const NewsBoard = ({ category, country}) => {
  const [article, setArticles] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    // <--- Include language in the URL
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`;

    // Added error handling and data validation for robustness
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          return response.json().then(errorData => {
            console.error("API Error Details:", errorData);
            throw new Error(errorData.message || 'Unknown API error');
          });
        }
        return response.json();
      })
      .then(data => {
        if (data && data.articles) {
          setArticles(data.articles);
        } else {
          console.warn("API response missing articles array:", data);
          setArticles([]); // Clear articles if none found
        }
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setArticles([]); // Clear articles on error
        // You might want to show a user-friendly error message on the UI
      });
  }, [category, country]); // <--- IMPORTANT: Add country and language to the dependency array

  return (
    <div>
      <h1 className='text-center p-1 m-1 text-light bg-dark rounded-3'>Latest<span className='badge text-danger'>News</span></h1>
      <div className='d-flex flex-wrap justify-content-center align-items-stretch'>
        {/* Show a message if no articles are found */}
        {article.length > 0 ? (
          article.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className='text-center text-muted mt-5'>No news available for the selected options. Try different filters.</p>
        )}
      </div>
    </div>
  )
}

export default NewsBoard