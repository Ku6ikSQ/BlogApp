type Mods = Record<string, string | boolean>;

type AdditionalType = string | undefined;

export function classNames(
    className: string,
    additional: AdditionalType[] = [],
    mods: Mods = {}
): string {
    const classes = [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter((e) => e[1])
            .map((e) => (e[1] ? e[0] : "")),
    ];

    return classes.join(" ");
}
