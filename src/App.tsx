import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img style={{ borderRadius: '50%', border: '.5rem solid #61dafbaa', boxShadow: '2px 0 10px #fff22' }} src="https://avatars.githubusercontent.com/u/82069062?v=4" className="App-logo" alt="logo" />
        </div>
        <p>
          MY MUSIC APP
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
