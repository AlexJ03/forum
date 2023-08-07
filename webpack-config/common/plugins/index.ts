import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { HTMLWebpackPluginOptions, MiniCssExtractPluginOptions } from "./options";

const HTMLWebpackPlugin = new HtmlWebpackPlugin(HTMLWebpackPluginOptions);

const MINICssExtractPlugin = new MiniCssExtractPlugin(MiniCssExtractPluginOptions);

const ProgressPlugin = new webpack.ProgressPlugin();

export const plugins =  [
        HTMLWebpackPlugin,
        MINICssExtractPlugin,
        ProgressPlugin
];
