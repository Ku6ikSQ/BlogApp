import { type Configuration } from "webpack-dev-server";
import { type IDevServer } from "./types";

export function buildServer({ port }: IDevServer): Configuration {
    return {
        port: port ?? 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    };
}
