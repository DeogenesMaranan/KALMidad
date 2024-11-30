
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
        homeAdmin: path.resolve(__dirname, './web/presenter/home-admin.js'),
        addReport: path.resolve(__dirname, './web/presenter/add-report.js'),
        homeClient: path.resolve(__dirname, './web/presenter/home-client.js'),
        userProfile: path.resolve(__dirname, './web/presenter/user-profile.js'),
        homeSkeleton: path.resolve(__dirname, './web/presenter/home-skeleton.js'),
        manageReports: path.resolve(__dirname, './web/presenter/manage-reports.js'),
        recentAssessment: path.resolve(__dirname, './web/presenter/recent-assessment.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        fallback: {
            "os": false,
            "util": require.resolve("util/"),
            "assert": require.resolve("assert/"),
            "buffer": require.resolve("buffer/"),
            "http": require.resolve("stream-http"),
            "fs": require.resolve("browserify-fs"),
            "vm": require.resolve("vm-browserify"),
            "net": require.resolve("net-browserify"),
            "path": require.resolve("path-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "https": require.resolve("https-browserify"),
            "async_hooks": require.resolve('async_hooks'),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "querystring": require.resolve("querystring-es3"),
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
