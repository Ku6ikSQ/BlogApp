import type { TypedUseSelectorHook } from "react-redux";
import type { IState } from "../types";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
