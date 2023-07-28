import merge from "webpack-merge";
import webpackCommon from "./webpack.common";
import { webpackProd } from "./webpack-config/prod";

module.exports = merge(webpackCommon, webpackProd);