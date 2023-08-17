import { devServer } from "../dev-server";
import type webpack from "webpack";

export const webpackDev: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    devServer
};