// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Layouts
import MainLayout from '../imports/layouts/MainLayout';
import ShowLayout from '../imports/layouts/ShowLayout';

// Pages
import Home from '../imports/ui/Home';
import Show from '../imports/ui/Show';

// Root_url
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />),
    });
  },
});

// Show
FlowRouter.route('/movie/:id', {
  action(params) {
    mount(ShowLayout, {
      content: (<Show params={params} />),
    });
  },
});
