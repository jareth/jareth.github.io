const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin }  = require('webpack-manifest-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: path.resolve(__dirname, './assets/css/site.css'),
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: isProduction ? '[name].[fullhash].js' : '[name].js',
        chunkFilename: isProduction ? '[id].[fullhash].js' : '[id].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[fullhash].css' : '[name].css'
        }),
        new WebpackManifestPlugin ({
            fileName: '../_data/manifest.yml',
            publicPath: '/dist/',
        }),
    ],
};