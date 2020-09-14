import React from 'react';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ShortenerJumbo from './components/ShortenerJumbo';
import TopFiveContainer from './containers/TopFiveContainer';
import HitsBoxContainer from './containers/HitsBoxContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <ShortenerJumbo />
      <TopFiveContainer />
      <HitsBoxContainer />
      <Footer />
    </div>
  );
}

export default App;
