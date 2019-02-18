const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'game.js',
      path: path.join(__dirname, 'static', 'game'),
      publicPath: '/static/'
  },    
  performance: { hints: false }
}
