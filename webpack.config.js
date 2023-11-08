/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const tsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const distPath = path.resolve(path.join(__dirname, 'dist'));

const config = {
  devtool: 'inline-source-map',

  externals: [
    webpackNodeExternals({
      allowlist: ['tslib'],
      additionalModuleDirs: [path.resolve(__dirname, '..', '..', 'node_modules')],
    }),
  ],
  mode: 'development',
  target: 'node',

  resolve: {
    fallback: {
      __dirname: false,
      __filename: false,
      global: false,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '..', '..', 'node_modules'), 'node_modules'],
    plugins: [
      new tsconfigPathsWebpackPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },

  entry: {
    'vending-mechine-api': [path.join('src', 'servers', 'app.ts')],
  },

  output: {
    filename: 'app.cjs',
    libraryTarget: 'commonjs',
    path: path.join(distPath, 'src'),
  },

  optimization: {
    minimize: false, // <---- disables uglify.
    // minimizer: [new UglifyJsPlugin()] if you want to customize it.
  },

  module: {
    rules: [
      {
        loader: 'json-loader',
        test: /\.json$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
        options: {
          configFile: 'tsconfig.json',
          compilerOptions: {
            noEmit: false,
            sourceMap: true,
            declaration: false,
            declarationDir: undefined,
            declarationMap: false,
          },
        },
      },
    ],
  },

  node: {
    __dirname: true,
  },
};

module.exports = config;
