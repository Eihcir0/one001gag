import React from 'react';

export const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(100, 100, 100, 0.75)'
  },
  content : {
    position        : 'fixed',
    top             : '200px',
    left            : '300px',
    right           : '300px',
    bottom          : '200px',
    border          : '1px solid #ccc',
    padding         : '20px',
    backgroundColor : 'white',
    opacity         : '1'
  }
};
