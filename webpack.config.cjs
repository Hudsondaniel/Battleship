const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'), 
        publicPath: ''
    },
    mode: 'development',
    module: {
        rules: [
        {
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'] 
        },
        {
            test: /\.(png|svg|jpg|gif)$/, 
            use: ['file-loader'] 
        },
    ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '.' }, // copies everything from public/ to dist/
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        open: true,
    },
};
