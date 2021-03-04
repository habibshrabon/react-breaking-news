import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/News/Header/Header';
// import News from './components/News/News';
import TopHeadline from './components/News/TopHeadline/TopHeadline';


function App() {
  return (
    <div className="App">
      <h1>React bootstrap</h1>
      <Header></Header>
     
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
