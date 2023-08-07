import { type ResolveOptions } from "webpack";
import { type IPaths } from "./types";

export function buildResolvers ({ entry }: IPaths): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        mainFiles: ["index"],
        preferAbsolute: true,
        modules: [entry, "node_modules"]
    };
}
