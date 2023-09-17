const path = require("path");
const html = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./module/aggregator.js",
    calculos: "./module/calculos.js",
    imgViewer: "./module/imgViewer.js",
    passwordGen: "./module/passwordGen.js",
    unitConvert: "./module/unitConvert.js",
    taskList: "./module/taskList.js",
    jscalculate: "./js/calculate.js",
    jsimgViewer: "./js/imgViewer.js",
    jspasswordGen: "./js/genPassword.js",
    jsunitConvert: "./js/unitConvert.js",
    jstaskList: "./js/taskList.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        
      },
    ],
  },
  plugins: [
    new html({
      template: "./index.html",
      filename: "index.html",
    }),
    new html({
      template: "./page/calculos/calculos.html",
      filename: "page/calculos/calculos.html",

    }),
    new html({
      template: "./page/imgViewer/imgViewer.html",
      filename: "page/imgViewer/imgViewer.html",
      
    }),

    new html({
      template: "./page/passwordGen/passwordGen.html",
      filename: "page/passwordGen/passwordGen.html",
     
    }),

    new html({
      template: "./page/unitConvert/unitConvert.html",
      filename: "page/unitConvert/unitConvert.html",
    }),

    new html({
      template: "./page/taskList/taskList.html",
      filename: "/page/taskList/taskList.html",
    }),
  ],
};