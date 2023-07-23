import { ResolveOptions } from "webpack";
import { IPaths } from "./types";

export function buildResolvers({ entry }: IPaths): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        mainFiles: ["index"],
        preferAbsolute: true,
        modules: [entry, "node_modules"],
    };
}
