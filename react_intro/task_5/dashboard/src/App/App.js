import React from "react";
import logo from '../assets/atlas_logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <button type="submit">OK</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;