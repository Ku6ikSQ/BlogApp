import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildServer } from "./buildServer";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types";

export function buildConfig({
    mode,
    paths,
    server,
    isDev,
}: IBuildOptions): Configuration {
    const config: Configuration = {
        entry: paths.entry,
        mode: mode,
        devtool: "inline-source-map",
        module: {
            rules: buildLoaders(isDev),
        },
        plugins: buildPlugins(paths, isDev),
        resolve: buildResolvers(paths),
        output: {
            filename: "bundle.[contenthash].js",
            path: paths.output,
            clean: true,
        },
        devServer: buildServer(server),
    };

    return config;
}
