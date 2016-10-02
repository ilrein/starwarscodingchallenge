// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Layouts
import MainLayout from '../imports/layouts/MainLayout';

import Home from '../imports/ui/Home';

// Root_url
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />),
    });
  },
});
