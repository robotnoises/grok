import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './Grok.css';
import 'tachyons';

class Grok extends Component {
  render() {
    return (
      <div className="grok-wrapper-main sans-serif">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Grok;
