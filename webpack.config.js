const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // The mode for Webpack: development or production
  mode: 'production', // Change to 'production' for production build

  // Entry point of the application (your main TypeScript file)
  entry: './src/index.tsx',

  // Output directory and filename
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // Resolve .ts and .tsx extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  // Define module rules for processing TypeScript
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,  // Match .ts and .tsx files
        use: 'ts-loader',     // Use ts-loader to compile TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,   // For handling CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader', // Use url-loader or file-loader
            options: {
              limit: 8192, // 8kb limit, below which images are converted to base64
              name: 'assets/images/[name].[hash:8].[ext]', // Output path and naming convention
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader', // for inline SVGs
            options: {
              limit: 8192,
              name: 'assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  // Webpack Dev Server configuration (useful for development)
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,  // You can change the port if needed
    historyApiFallback: true,  // For handling React Router paths
  },

  // Plugins for additional functionality
  plugins: [
    new CleanWebpackPlugin(),  // Clean dist folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Template for generating HTML
      inject: true,
    }),
  ],

  // Optional: Source maps for better debugging
  devtool: 'source-map',
};
