import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';
import Grok from './Grok';

import './index.css';

const reduxStore = store();

ReactDOM.render(
  <Provider store={ reduxStore }>
    <Grok />
  </Provider>,
  document.getElementById('root')
);
