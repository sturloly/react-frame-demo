import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {   // compiled webpack.config.dev code passed in
  noInfo: true,  // no information on the command when running
  publicPath: config.output.publicPath  //
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {   // all requests redirect to index.html for single page app
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);   //  open package in package.json
  }
});
