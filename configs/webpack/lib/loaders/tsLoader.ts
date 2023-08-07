import { type RuleSetRule } from "webpack";

export const buildTSLoader = (): RuleSetRule => ({
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
});
