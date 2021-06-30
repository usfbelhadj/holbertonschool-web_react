import React from 'react';
import logo from './logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>
        School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
        <label for="Email">Email: </label>
        <input type="text"></input>
        <label for="Password">Password: </label>
        <input type="password"></input>
        <input type="button" value="OK"></input>
        </div>
      </body>
      <footer className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
