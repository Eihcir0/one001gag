import React from 'react';
import { Link } from 'react-router';

// <Link to="/" className="header-link"></Link>

export const App = ({children}) => {
  return (
  <div>
    <nav className="navbar flex">
      <h1 className="title-logo">
        one
      <br/>
        001
        <br/>
        gag
      </h1>
      <span className="tagline">GO FN() YOURSELF!</span>
    </nav>
    {children}
  </div>
);};
