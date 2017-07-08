import 'babel-polyfill'; // size 50k minified, this project : object.assign only
import React from 'react';
import { render } from 'react-dom'; // @.14 pulled out from react
import { Router, browserHistory } from 'react-router'; // browerHistory(modern browers use HTML5 pushstate) vs hash based URLs
import routes from './routes';
import './styles/style.css';  //enable Webpack to be able to import CSS files.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

console.log("heyhey");
