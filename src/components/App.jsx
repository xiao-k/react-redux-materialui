import React, { Component, PropTypes } from 'react';

import Header from '../components/Header';

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
};

export default App;