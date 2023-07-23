import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { IPaths } from "./types";

export function buildPlugins({ html }: IPaths): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
            chunkFilename: "css/[name]-[contenthash:8].css",
        }),
        new ProgressPlugin(),
    ];

    return plugins;
}
