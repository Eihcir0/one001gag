import React from 'react';
import { Link } from 'react-router';

// <Link to="/" className="header-link"></Link>

export const App = ({children}) => {
  return (
  <div>
    <header>
      <h1 className="title-page">
        one
      <br/>
        001
        <br/>
        gag
      </h1>
    </header>
    {children}
  </div>
);};
