import { createContext } from "react";
import { type ITheme } from "./types";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ThemeContext = createContext<ITheme>({} as ITheme);
