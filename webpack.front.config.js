const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: "./src/static/js/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'src/static/js'),
            '@style': path.resolve(__dirname, 'src/static/style'),
            "@vue": path.resolve(__dirname, "src/static/js/components"),
            "@images": path.resolve(__dirname, "src/static/images")
        }
    },
    devServer: {
        open: 'Google Chrome',
        proxy: {
            '/data': 'http://localhost:3000'
        }
    },
    module: {
        rules: [{
            test: /.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: [/.css$|.scss$/],
            use: [
                "vue-style-loader",
                "style-loader",
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|png|jpeg)$/i,
            loader: "file-loader"
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/static/html/index.html",
            filename: "./index.html",
            excludeChunks: [ '.src/static/server' ],
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
        }),
        new VueLoaderPlugin()
    ]
}