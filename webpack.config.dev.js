import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, // enable display debug info
  devtool: 'inline-source-map', // one of many options,...
  noInfo: false, // display a list of all the files its bundling
  entry: [  // entry points
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails. + react&redux
    path.resolve(__dirname, 'src/index') // must be at the last of entry list, (path.resolve)? source missing
  ],
  target: 'web', // needs to be node if node.js apps, bundle accordinglly
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`. !!dev env won't be valid
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')  // source codes source: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  // enable module change and replace to reload browser partially
    new webpack.NoErrorsPlugin()  // error messages in the brower without breaking hot reload experience
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
