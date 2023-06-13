// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ConnectPage from './pages/ConnectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/article/:id" component={ArticlePage} />
        <Route exact path="/connect" component={ConnectPage} />
      </Routes>
    </Router>
  );
}

export default App;

