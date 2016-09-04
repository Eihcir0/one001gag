import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

// <Link to="/" className="header-link"></Link>

export const App = ({children}) => {
  Modal.setAppElement(document.body); 
  return (
  <div>
    {children}
  </div>
);};
