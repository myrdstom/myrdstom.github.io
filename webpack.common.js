const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports =  {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    plugins:[new HTMLWebpackPlugin({
        filename: "index.html",
        template: "./src/templates/home.html"
    }),
    new HTMLWebpackPlugin({
        filename: "addReview.html",
        template: "./src/templates/addReview.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

};