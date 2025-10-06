const HtmlWebpackPlugging = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugging({
            template: './public/index.html'
        })
    ]
}