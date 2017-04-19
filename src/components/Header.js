import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="bg-black fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3" href="#" title="Home">Grok</a>
          <a className="link dim white dib mr3" href="#" title="About">About</a>
          <a className="link dim white dib mr3" href="#" title="Store">Foo</a>
          <a className="link dim white dib" href="#" title="Contact">Bar</a>
        </nav>
      </header>
    );
  }
}

export default Header;