import { OutputWebpackPath } from "../../../webpack.paths";

export const output = {
    path: OutputWebpackPath,
    filename: "bundle.js",
    clean: true,
    publicPath: "/"
};