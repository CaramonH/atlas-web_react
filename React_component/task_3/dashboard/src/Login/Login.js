import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Login-body">
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
  );
}

export default Login;