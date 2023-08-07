import { devServer } from "../dev-server";
import webpack from "webpack";

export const webpackDev: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    devServer
};