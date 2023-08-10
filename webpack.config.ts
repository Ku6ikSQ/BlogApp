import {
    type BuildMode,
    type IDevServer,
    type IPaths,
    buildConfig,
} from "./configs/wwebpack";
import { type Configuration } from "webpack";
import path from "path";

interface IEnviroment {
    mode?: BuildMode;
    port?: number;
}

export default ({
    mode = "development",
    port = 3000,
}: IEnviroment): Configuration => {
    const isDev = mode === "development";

    const paths: IPaths = {
        entry: path.resolve(__dirname, "src"),
        output: path.resolve(__dirname, "build"),
        public: path.resolve(__dirname, "public"),
        html: path.resolve(__dirname, "public", "index.html"),
    };

    const server: IDevServer = {
        port,
    };

    const config: Configuration = buildConfig({ mode, isDev, paths, server });

    return config;
};
