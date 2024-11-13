
const webpack = require('webpack')
const path = require('path');


module.exports = {
    mode: "development",
    externals: {
        axios: 'axios'
    }, 
    entry: {
        server: path.resolve(__dirname, './server/index.js'),
        landing: path.resolve(__dirname, './web/presenter/landing.js'),
        landingRequest: path.resolve(__dirname, './web/presenter/landingRequest.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        fallback: {
            "os": false,
            "async_hooks": require.resolve('async_hooks'),
            "buffer": require.resolve("buffer/"),
            "util": require.resolve("util/"),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "assert": require.resolve("assert/"),
            "vm": require.resolve("vm-browserify"),
            "fs": require.resolve("browserify-fs"),
            "net": require.resolve("net-browserify")
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/views$/,
            contextRegExp: /express/
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /async_hooks/,
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /express/,
        }),
    ],
    module: {
        rules: [
        {
            test: /\.css$/i,          
            use: ['style-loader', 'css-loader'],
        },
        ],
      },
    stats: {
        errorDetails: true,
    },
    performance: {
        hints: false 
    },     
};
