// Place for browser code!

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// only for dev server
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
