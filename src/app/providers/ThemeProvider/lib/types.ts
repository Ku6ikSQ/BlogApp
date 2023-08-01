export type Theme = "light" | "dark";

export interface ITheme {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export interface IUseTheme {
    theme: Theme;
    toggleTheme: () => void;
}
