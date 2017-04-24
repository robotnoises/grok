import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase'

import SideMenu from './SideMenu';
import Content from './Content';

class Body extends Component {
  static propTypes = {
    manifest: PropTypes.object,
  };

  render() {    
    return (
      <section className="pa3 pa4-ns bt b--black-10 black-70 bg-white">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <SideMenu manifest={ this.props.manifest } />
            <Content />
          </div>
        </div>
      </section>
    );
  }
}

const wrappedBody = firebaseConnect([
  '/manifest/abc123'
])(Body);

export default connect(
  ({ firebase }) => ({
    manifest: dataToJS(firebase, '/manifest/abc123'),
  })
)(wrappedBody);