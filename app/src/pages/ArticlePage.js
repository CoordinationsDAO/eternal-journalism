// ArticlePage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import EternalJournalismContract from './EternalJournalismV2.json';

function ArticlePage() {
  const { id } = useParams();
  const { library } = useWeb3React();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const contractAddress = '0xCef69Cd562EC0C35aD87c89519eB8c78bD214c38';
        const contract = new ethers.Contract(contractAddress, EternalJournalismContract.abi, library);
        const article = await contract.getArticle(id);
        setArticle(article);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (library) {
      fetchArticle();
    }
  }, [id, library]);

  return (
    <div>
      <h1>Article Details</h1>
      {article ? (
        <div>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
}

export default ArticlePage;

