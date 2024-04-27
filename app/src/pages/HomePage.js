// HomePage.js

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import EternalJournalismContract from './EternalJournalismV2.json';

function HomePage() {
  const { library } = useWeb3React();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const contractAddress = '0xCef69Cd562EC0C35aD87c89519eB8c78bD214c38';
        const contract = new ethers.Contract(contractAddress, EternalJournalismContract.abi, library);

        const articleCount = await contract.getArticleCount();
        const articles = [];

        for (let i = 0; i < articleCount; i++) {
          const article = await contract.getArticle(i);
          articles.push(article);
        }

        setArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    if (library) {
      fetchArticles();
    }
  }, [library]);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

