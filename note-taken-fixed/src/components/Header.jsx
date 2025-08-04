import React, { useState } from 'react';
import './css/Header.css';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

export default function Header({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginInfo.username && loginInfo.password) {
      setUser({ username: loginInfo.username });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginInfo({ username: '', password: '' });
  };

  return (
    <header>
      <div className="page-wrapper">
        <nav>
          <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
            <img src="/images/BurgerButton.png" alt="Menu" className="burger-icon" />
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><a href="#upload">Upload Notes</a></li>
            <li><Link to="/browse">Browse</Link></li>
            {user && <li><Link to="/saved">Saved</Link></li>}

            <li>
              {user ? (
                <div>
                  <p>Welcome, {user.username}!</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="login-form">
                  <input
                    type="text"
                    placeholder="Username"
                    value={loginInfo.username}
                    onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginInfo.password}
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                    required
                  />
                  <button type="submit">Login</button>
                </form>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}