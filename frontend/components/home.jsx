import React from 'react';
import SessionContainer from './session_container';

export const home = () => (
  <div>
    <div className="home-container">
      
      <nav className="topbar flex">
        <img className="title-logo-home" src="http://res.cloudinary.com/one001gag/image/upload/v1472693768/0ne001gaglogo_ezwrht.png" />
        <span className="tagline">Go Fn() yourself!</span>
      </nav>
      <SessionContainer/>
    </div>
  </div>
);
