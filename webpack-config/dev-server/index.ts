import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const devServer: DevServerConfiguration = {
    port: 8000,
    open: true,
    hot: true
};