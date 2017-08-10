const path = require('path');

function getFilePath(env) {
    return env === "production" ? '../skybetdev/tiny/Mbet/Public/js/lib/miniApps' : 'dist';
}

function getExternals(env) {
    return env === 'production' ? { react: 'react', "react-dom": "react-dom" } : false;
}

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'tennisScoreboard.js',
        path: path.join(__dirname, getFilePath(process.env.NODE_ENV)),
        libraryTarget: 'umd',
        library: 'main'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: getExternals(process.env.NODE_ENV)
};
