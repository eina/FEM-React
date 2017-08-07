const path = require('path')

module.exports = {
  // refer to the root directory of your project
  context: __dirname,
  // the front door to your project/main file to read from
  entry: './js/ClientApp.jsx',
  // inline all my code in production
  // show pre-transpiled code in errors
  devtool: 'cheap-eval-source-map',
  
  output: {
    path: path.join(__dirname, 'public'),    
    filename: 'bundle.js'
  },
  
  resolve: {
    // order of filenames to see if [filename].[extension] exists
    extensions: ['.js', '.jsx', '.json']
  },
  
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  module: {
    // apply different loaders to code whooo
    rules: [
      // run before babel, only on files that changed
      { enforce: 'pre', test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  }

}