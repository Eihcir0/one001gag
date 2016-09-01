import React from 'react';
import SessionContainer from './session_container';

export const home = () => (
  <div>
    <nav className="navbar flex">
      <img className="title-logo" src="http://res.cloudinary.com/one001gag/image/upload/v1472693768/0ne001gaglogo_ezwrht.png" />
      <span className="tagline">Go Fn() yourself!</span>
    </nav>
    <div className="home-container">
      <img className="opening-gif" src="http://s0.thejournal.ie/media/2013/04/computer-rage.gif" alt="" />
      <SessionContainer/>
    </div>
  </div>
);
