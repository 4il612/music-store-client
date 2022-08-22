import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../storage/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
