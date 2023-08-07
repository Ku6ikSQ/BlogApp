import { type RuleSetRule } from "webpack";
import { buildScssLoader } from "./loaders/scssLoader";
import { buildSvgLoader } from "./loaders/svgLoader";
import { buildFileLoader } from "./loaders/fileLoader";
import { buildTSLoader } from "./loaders/tsLoader";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    const tsLoader = buildTSLoader();

    const scssLoader = buildScssLoader(isDev);

    return [tsLoader, scssLoader, svgLoader, fileLoader];
}
