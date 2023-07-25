import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from "webpack";
import { IBuildOptions, IPaths } from "./types";

export function buildPlugins(
    { html }: IPaths,
    isDev: boolean
): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
            chunkFilename: "css/[name]-[contenthash:8].css",
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: isDev,
        }),
    ];

    return plugins;
}
