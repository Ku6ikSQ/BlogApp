import { type Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildServer } from "./buildServer";
import { buildResolvers } from "./buildResolvers";
import { type IBuildOptions } from "./types";

export function buildConfig ({
    mode,
    paths,
    server,
    isDev
}: IBuildOptions): Configuration {
    const config: Configuration = {
        entry: paths.entry,
        mode,
        module: {
            rules: buildLoaders(isDev)
        },
        plugins: buildPlugins(paths, isDev),
        resolve: buildResolvers(paths),
        output: {
            filename: "bundle.[contenthash].js",
            path: paths.output,
            clean: true
        },
        devServer: isDev ? buildServer(server) : undefined,
        devtool: isDev ? "inline-source-map" : undefined
    };

    return config;
}
