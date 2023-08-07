import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type RuleSetRule } from "webpack";

export const buildScssLoader = (isDev: boolean): RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => resPath.includes(".module."),
                    localIdentName: isDev
                        ? "[local]-[hash:base64:4]"
                        : "[hash:base64:8]",
                },
                importLoaders: 1,
            },
        },
        "sass-loader",
    ],
});
