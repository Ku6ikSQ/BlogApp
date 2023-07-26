import { createContext } from "react";
import { type ITheme } from "./types";

export const ThemeContext = createContext<ITheme>(undefined);
