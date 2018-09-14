const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = (env, argv) => {
  return {
    mode: argv && argv.mode ? argv.mode : "development",
    devtool: "source-map",
    entry: { app: path.resolve(__dirname, "./src/index.tsx") },
    output: { path: path.resolve(__dirname, "./bin"), filename: "[name].js" },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-react-jsx", { pragma: "m" }]]
            }
          }
        }
      ]
    },
    plugins: [new CheckerPlugin()]
  };
};
