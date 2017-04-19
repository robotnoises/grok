import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';

class Body extends Component {
  render() {
    return (
      <section className="pa3 pa4-ns bt b--black-10 black-70 bg-white">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <SideMenu />
            <Content />
          </div>
        </div>
      </section>
    );
  }
}

export default Body;