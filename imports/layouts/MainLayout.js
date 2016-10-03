import React, { PropTypes } from 'react';

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Navbar
import AppNavBar from '../ui/AppNavBar';

// Styles
import '../styles/main.scss'

const MainLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <main className="main-layout">
      <AppNavBar />
      {content}
    </main>
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  content: PropTypes.node,
};

export default MainLayout;
