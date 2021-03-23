// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Components
import { Header } from './components/header';

render(
  <Provider store = { store }>
    <Header />
  </Provider>,
  document.getElementById('root')
);
