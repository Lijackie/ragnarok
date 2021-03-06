import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/ragnarok/">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);