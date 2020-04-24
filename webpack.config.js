const SRC_DIR = __dirname + '/src/lib';
const DIST_DIR = __dirname + '/dist';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  cache: true,
  entry: {
    'Grid': SRC_DIR + '/Grid.tsx',
  },
  // recompiles if it sees changes
  // watch: true,
  devtool: 'source-map',
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'Grid.js',
    libraryTarget: 'umd',
    library: 'ReactCellGrid',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              // 'react',
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', {
                //   loose: true
              }],
              '@babel/plugin-transform-runtime',
            ],
          },
        },
        {
          loader: 'ts-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico|woff|woff2)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // needed so that when the component is imported, there aren't two reacts
  externals: {
    'react': 'react', // Case matters here
    'react-dom': 'reactDOM', // Case matters here
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
