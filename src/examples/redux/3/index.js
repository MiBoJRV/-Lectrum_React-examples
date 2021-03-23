// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Pages
import { Home } from './pages/home';

render(
  <Provider store = { store }>
    <Home />
  </Provider>,
  document.getElementById('root')
);
