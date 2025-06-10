import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../App.css';
import google from '../Images/google.png';
import facebook from '../Images/facebook.png';
import usernameIcon from '../Images/user.png'; // Import the username icon
import passwordIcon from '../Images/padlock.png';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <div className="input-with-icon">
            <img src={usernameIcon} alt="Username Icon" className="input-icon" />
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <img src={passwordIcon} alt="Password Icon" className="input-icon" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Login Now</button>
      </form>
      <div className="social-login">
        <p className="login">Login with <b>Others</b></p>
        <button className="social-button">
          <img src={google} className="pic" alt="Google" /> Login with<b>Google</b>
        </button>
        <button className="social-button">
          <img src={facebook} className="pic" alt="Facebook" /> Login with <b>Facebook</b>
        </button>
      </div>
    </div>
  );
}

export default App;