import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import HardwareKeyboardReturn from 'material-ui/svg-icons/hardware/keyboard-return';

class AppNavBar extends Component {
  render() {
    return (
      <AppBar
        className="header"
        title="Star Wars Challenge"
        iconElementLeft={<HardwareKeyboardReturn />}
        onTouchTap={() => { FlowRouter.go('/') }}
      />
    );
  }
}

export default AppNavBar;
