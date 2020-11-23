import React from 'react';
import Home from '.';

export default {
  title: 'pages/Home',
  components: Home,
};

const Template = (args) => <Home {...args} />;

export const primary = Template.bind({});
primary.args = {};
