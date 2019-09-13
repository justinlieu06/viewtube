import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="greeting-login-signup">
      {/* <Link to="/signup" className="greeting-link"><i className="fas fa-user-circle"></i> Sign up</Link> */}
      <Link to="/login" className="greeting-link"><i className="fas fa-user-circle"></i> Login</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="greeting-header">
      {/* <div className="header-name" className="greeting-username">{currentUser.username.slice(0, 1)}</div> */}
      <button className="greeting-button" onClick={logout}>Log Out</button>
      <div className="greeting-profile"><i className="fas fa-user-circle fa-2x"></i></div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
