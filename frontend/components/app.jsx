import React from 'react';
import { Link } from 'react-router';

// <Link to="/" className="header-link"></Link>

export const App = ({children}) => {
  return (
  <div>
    <header>
      <h1>one001gag</h1>
    </header>
    {children}
  </div>
);};
