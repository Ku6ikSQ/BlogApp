import path from "path";
import { type RuleSetRule, type Configuration, DefinePlugin } from "webpack";
import { buildScssLoader } from "../webpack/lib/loaders/scssLoader";
import { buildSvgLoader } from "../webpack/lib/loaders/svgLoader";

export default ({ config }: { config: Configuration }): Configuration => {
    const src: string = path.resolve(__dirname, "..", "..", "src");

    // @ts-expect-error strictNullChecks
    config.resolve.modules.push(src);
    // @ts-expect-error strictNullChecks
    config.module.rules.push(buildScssLoader(true));
    // @ts-expect-error strictNullChecks
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module?.rules.push(buildSvgLoader());

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        })
    );

    return config;
};
