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
    textAlign       : 'center',
    position        : 'fixed',
    top             : '50%',
    left            : '50%',
    transform       : 'translate3d(-50%, -50%, 0)',
    border          : '1px solid #ccc',
    padding         : '40px',
    backgroundColor : 'white',
    opacity         : '1'
  }
};
