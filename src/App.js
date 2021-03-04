import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
// import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragment from './components/Fragment/Fragment';


function App() {
  return (
    <div className="App">
      <h1>React bootstrap</h1>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
