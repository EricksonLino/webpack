/*const HtmlWebpack = require('html-webpack-plugin');
module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.html$/,  
                loader: 'html-loader',
                Options: {
                    sources: false
                }

            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack()
    ]
}*/

const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /styles.css$/,
            use: ["style-loader", "css-loader"],
          },
        ]
    },
    module:{
        rules:[
            {
                //rules: [{ test: /\.txt$/, use: 'raw-loader' }],
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'nuevo-estilo.css',
            ignoreOrder: false
        })
    ],
};
