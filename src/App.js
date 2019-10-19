import React from 'react';
import logo from './earth.gif';
import hello from './hello.jpg';
import './App.css';

const style = {
  backgroundImage: `url(${hello})`
}

function App() {
  return (
    <div className="App">
      <header className="App-header" style={style}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Docker!
        </p>
        <a
          className="App-link"
          href="https://github.com/asoluwaseun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
