type Mods = Record<string, string | boolean>;

export function classNames(
    className: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    const classes = [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter((e) => e[1])
            .map((e) => (e[1] ? e[0] : "")),
    ];

    return classes.join(" ");
}
