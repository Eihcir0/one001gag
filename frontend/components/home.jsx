import React from 'react';
import SessionContainer from './session_container';

export const home = () => (
  <div>
    <nav className="navbar flex">
      <h1 className="title-logo">
        one
      <br/>
        001
        <br/>
        gag
      </h1>
      <span className="tagline">Go Fn() yourself!</span>
    </nav>
    <div className="home-container">
      <img className="opening-gif" src="http://s0.thejournal.ie/media/2013/04/computer-rage.gif" alt="" />
      <SessionContainer/>
    </div>
  </div>
);
