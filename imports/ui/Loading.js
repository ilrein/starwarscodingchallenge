import React, { Component } from 'react';

import '../styles/circle.css';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="circle"></div>
        <div className="circle-small"></div>
        <div className="circle-big"></div>
        <div className="circle-inner-inner"></div>
        <div className="circle-inner"></div>
      </div>
    );
  }
}
