const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index',
      },
      // when module deferations use `shared: ['faker']`, make sure both use the same version as when versions are different webpack endup loading both copies as they're different versions
      shared: ['faker']
      // shared: {
      //   faker: {
      //     singleton: true
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
