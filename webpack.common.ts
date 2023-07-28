import webpack from "webpack";
import {rules} from "./webpack-config/common/rules";
import {resolve} from "./webpack-config/common/resolve";
import {plugins} from "./webpack-config/common/plugins";
import {entry} from "./webpack-config/common/entry";
import {output} from "./webpack-config/common/output";

const config: webpack.Configuration = {
    entry,
    output,
    module: { rules },
    resolve,
    plugins: plugins,
}

export default config;
