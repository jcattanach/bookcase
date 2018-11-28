import React, { Component } from 'react';
import Menu from './components/Menu'

class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
