import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

class AppNavBar extends Component {
  render() {
    return (
      <AppBar
        className="header"
        showMenuIconButton={false}
        title="Star Wars Challenge"
        titleStyle={{ textAlign: 'center' }}
      />
    );
  }
}

export default AppNavBar;
