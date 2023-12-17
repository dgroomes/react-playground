const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    stats: {
        logging: "verbose",
    },
    infrastructureLogging: {
        level: "verbose",
    },
    mode: 'development', entry: './src/index.tsx', plugins: [new HtmlWebpackPlugin({
        title: 'react-playground/webpack', template: 'src/index.html'
    }),], module: {
        rules: [{
            test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/,
        }, {
            test: /\.css$/, use: ["style-loader", "css-loader"],
        },],
    }, devtool: 'inline-source-map', output: {
        filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist'), clean: true,
    }, devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    }, resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    }
};
