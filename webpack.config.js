let webpack = require('webpack'),
    path = require('path'),
    libName = 'type',
    outputFile,
    plugins = [],
    uglifyJs = webpack.optimize.UglifyJsPlugin,
    env = process.env.NODE_ENV

if (env === 'pro') {
    plugins.push(new uglifyJs({
        minimize: true
    }))
    outputFile = libName + '.min.js'
} else {
    outputFile = libName + '.js'
}

console.log(__dirname)

let config = {
    entry: __dirname + '/src/type.js',
    devtool: env === 'pro' ? '' : 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libName,
        libraryTarget: 'umd',
        umdNameedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: plugins
}

module.exports = config