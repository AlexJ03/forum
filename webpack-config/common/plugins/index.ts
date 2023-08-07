import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import Dotenv from "dotenv-webpack";

import { HTMLWebpackPluginOptions, MiniCssExtractPluginOptions } from "./options";

const HTMLWebpackPlugin = new HtmlWebpackPlugin( HTMLWebpackPluginOptions );

const MINICssExtractPlugin = new MiniCssExtractPlugin( MiniCssExtractPluginOptions );

const ProgressPlugin = new webpack.ProgressPlugin();

const DotenvPlugin = new Dotenv();

export const plugins =  [
        HTMLWebpackPlugin,
        MINICssExtractPlugin,
        ProgressPlugin,
        DotenvPlugin
];
