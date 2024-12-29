const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file for your project
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder for bundled files
    filename: 'main.js', // Output file name
    library: 'Neat', // Expose the library as 'Neat'
    libraryTarget: 'umd', // Universal Module Definition, compatible with CommonJS, AMD, and as a global variable
  },
  mode: 'production',
  resolve: {
    alias: {
      // Resolve Three.js and Neat if needed (if Neat is not being used directly from npm)
      three: path.resolve(__dirname, 'node_modules/three'),
      neat: path.resolve(__dirname, 'node_modules/neat'), // Optional if Neat is in node_modules
    },
  },
};

