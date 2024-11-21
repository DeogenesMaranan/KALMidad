
const path = require('path');
const webpack = require('webpack')


module.exports = {
    mode: "development",
    externals: {
        axios: 'axios'
    }, 
    entry: {
        server: path.resolve(__dirname, './server/index.js'),
        login: path.resolve(__dirname, './web/presenter/login.js'),
        signup: path.resolve(__dirname, './web/presenter/signup.js'),
        landing: path.resolve(__dirname, './web/presenter/landing.js'),
        addReport: path.resolve(__dirname, './web/presenter/add-report.js'),
        homeClient: path.resolve(__dirname, './web/presenter/home-client.js'),
        homeSkeleton: path.resolve(__dirname, './web/presenter/home-skeleton.js')
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
            "https": require.resolve("https-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "assert": require.resolve("assert/"),
            "vm": require.resolve("vm-browserify"),
            "fs": require.resolve("browserify-fs"),
            "net": require.resolve("net-browserify"),
            "stream": require.resolve("stream-browserify"),
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
