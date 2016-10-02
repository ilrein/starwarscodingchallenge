import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <AppBar
        className="header"
        title="Star Wars Challenge"
        onLeftIconButtonTouchTap={this.handleToggle}
      >
        <Drawer
          className="sidebar"
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem focusState="none" className="menu-item">
            Test
          </MenuItem>
        </Drawer>
      </AppBar>
    );
  }
}

export default AppNavBar;
