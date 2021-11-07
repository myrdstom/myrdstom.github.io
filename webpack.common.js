const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports =  {
    mode: "development",
    entry: {
        app: "./src/entryPoints/index.js",
        addReview:"./src/entryPoints/reviews.js"
    },
    plugins:[new HTMLWebpackPlugin({
        filename: "index.html",
        template: "./src/templates/home.html",
        excludeChunks: ['addReview']
    }),
    new HTMLWebpackPlugin({
        filename: "addReview.html",
        chunks: ['addReview', 'vendor'],
        template: "./src/templates/addReview.html"
    })],
};