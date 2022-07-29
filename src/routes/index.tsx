import React from 'react';
import NotFound from '../pages/404';
import About from '../pages/About';

import Home from './../pages/Home';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/about', component: About },
];

export default routes;
