export type BuildMode = "development" | "production";

export interface IPaths {
    entry: string;
    public: string;
    output: string;
    html: string;
}

export interface IDevServer {
    port?: number;
}

export interface IBuildOptions {
    paths: IPaths;
    mode: BuildMode;
    isDev: boolean;
    server: IDevServer;
}
