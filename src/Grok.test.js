import React from 'react';
import ReactDOM from 'react-dom';
import Grok from './Grok';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grok />, div);
});
