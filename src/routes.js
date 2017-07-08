import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from '/components/about/AboutPage';

export default (
  <Route path="/" component={App}>  // always load app
    <IndexRoute component={HomePage} />  // if "/" HomePage
    <Route path="about" component={AboutPage} />
  </Route>
);
