import { type RuleSetRule } from "webpack";

export const buildSvgLoader = (): RuleSetRule => ({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
});
