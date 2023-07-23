import { Configuration } from "webpack-dev-server";
import { IDevServer } from "./types";

export function buildServer({ port }: IDevServer): Configuration {
    return {
        port: port || 3000,
        open: true,
        historyApiFallback: true,
    };
}
