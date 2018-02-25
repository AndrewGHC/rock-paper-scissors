import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import FilterChunkWebpackPlugin from 'filter-chunk-webpack-plugin';
import path from 'path';

export default {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: path.resolve(__dirname),
  entry: './index',
  output: {
    path: `${__dirname}/../docs`,
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: true,
      inlineSource: '.js$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new FilterChunkWebpackPlugin({
      patterns: [
        '*.js',
      ],
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};
