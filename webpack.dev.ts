import merge from "webpack-merge";
import webpackCommon from "./webpack.common";
import { webpackDev } from "./webpack-config/dev";

module.exports = merge(webpackCommon, webpackDev);