import MiniCssExtractPlugin from "mini-css-extract-plugin";

const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const cssLoader = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
}

export const loaders = [
    tsLoader,
    cssLoader
]