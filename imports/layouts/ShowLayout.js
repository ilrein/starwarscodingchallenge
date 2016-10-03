import React, { PropTypes } from 'react';

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Navbar
import AppBackBar from '../ui/AppBackBar';

// Styles
import '../styles/main.scss'

const ShowLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <main className="main-layout">
      <AppBackBar />
      {content}
    </main>
  </MuiThemeProvider>
);

ShowLayout.propTypes = {
  content: PropTypes.node,
};

export default ShowLayout;
