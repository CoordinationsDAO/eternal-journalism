import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import EternalJournalismABI from './EternalJournalismABI.json';

const web3 = new Web3(Web3.givenProvider || 'https://rpc-mainnet.maticvigil.com');
const contractAddress = '0xEf1e3C2EEd23CFbDCC724ba275938C954F9Bc338'; // Replace with the actual contract address

const EternalJournalismApp = () => {
  const [contract, setContract] = useState(null);
  const [articleId, setArticleId] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleHash, setArticleHash] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const initContract = async () => {
      try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = EternalJournalismABI.networks[networkId];
        const instance = new web3.eth.Contract(EternalJournalismABI.abi, deployedNetwork && deployedNetwork.address);
        setContract(instance);
      } catch (error) {
        console.error('Failed to initialize contract', error);
      }
    };

    initContract();
  }, []);

  const handleArticleIdChange = (event) => {
    setArticleId(event.target.value);
  };

  const handleArticleTitleChange = (event) => {
    setArticleTitle(event.target.value);
  };

  const handleArticleContentChange = (event) => {
    setArticleContent(event.target.value);
  };

  const handleArticleHashChange = (event) => {
    setArticleHash(event.target.value);
  };

  const storeFullArticle = async () => {
    try {
      await contract.methods.storeFullArticle(articleId, articleTitle, articleContent).send({ from: web3.eth.defaultAccount });
      console.log('Full article stored successfully');
    } catch (error) {
      console.error('Failed to store full article', error);
    }
  };

  const storePartialArticle = async () => {
    try {
      await contract.methods.storePartialArticle(articleId, articleTitle, articleHash).send({ from: web3.eth.defaultAccount });
      console.log('Partial article stored successfully');
    } catch (error) {
      console.error('Failed to store partial article', error);
    }
  };

  const getArticle = async () => {
    try {
      const result = await contract.methods.getArticle(articleId).call();
      console.log('Article retrieved:', result);
      setArticles([result]);
    } catch (error) {
      console.error('Failed to get article', error);
    }
  };

  return (
    <div>
      <h1>Eternal Journalism</h1>
      <div>
        <label>Article ID:</label>
        <input type="text" value={articleId} onChange={handleArticleIdChange} />
      </div>
      <div>
        <label>Article Title:</label>
        <input type="text" value={articleTitle} onChange={handleArticleTitleChange} />
      </div>
      <div>
        <label>Article Content:</label>
        <input type="text" value={articleContent} onChange={handleArticleContentChange} />
      </div>
      <div>
        <label>Article Hash:</label>
        <input type="text" value={articleHash} onChange={handleArticleHashChange} />
      </div>
      <div>
        <button onClick={storeFullArticle}>Store Full Article</button>
        <button onClick={storePartialArticle}>Store Partial Article</button>
      </div>
      <div>
        <button onClick={getArticle}>Get Article</button>
      </div>
      <div>
        <h2>Articles:</h2>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <strong>ID:</strong> {article.id}<br />
              <strong>Title:</strong> {article.title}<br />
              {article.isFullArticle ? (
                <div>
                  <strong>Content:</strong> {article.content}
                </div>
              ) : (
                <div>
                  <strong>Hash:</strong> {article.hash}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EternalJournalismApp;

