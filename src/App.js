import React from 'react';
import TopBar from './components/TopBar';
import ShortenerJumbo from './components/ShortenerJumbo';
import TopFiveContainer from './containers/TopFiveContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <ShortenerJumbo />
      <TopFiveContainer />
    </div>
  );
}

export default App;
