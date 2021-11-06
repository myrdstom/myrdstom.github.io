const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports =  {
    mode: "development",
    entry: {
        app: "./src/index.js",
        addReview:"./src/reviews.js"
    },
    plugins:[new HTMLWebpackPlugin({
        filename: "index.html",
        template: "./src/templates/home.html",
        excludeChunks: ['addReview']
    }),
    new HTMLWebpackPlugin({
        filename: "addReview.html",
        chunks: ['addReview'],
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