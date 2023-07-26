import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {
    type WebpackPluginInstance,
    ProgressPlugin,
    DefinePlugin,
    HotModuleReplacementPlugin
} from "webpack";
import { type IPaths } from "./types";

export function buildPlugins (
    { html }: IPaths,
    isDev: boolean
): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: html
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
            chunkFilename: "css/[name]-[contenthash:8].css"
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: isDev
        })
    ];

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
