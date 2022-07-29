import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';


const routes = [
  { exact: true, path: '/', component: Home, layout: React.Fragment },
  { exact: true, path: '/about', component: About },
];

export default routes;
