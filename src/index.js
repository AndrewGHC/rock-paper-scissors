import React from 'react';
import ReactDOM from 'react-dom';
import 'raf'; // Request animation frame polyfill

import Main from './app/main';

ReactDOM.render(
  <Main />,
  document.getElementById('app'),
);
