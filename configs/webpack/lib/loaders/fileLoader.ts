import { type RuleSetRule } from "webpack";

export const buildFileLoader = (): RuleSetRule => ({
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: ["file-loader"],
});
