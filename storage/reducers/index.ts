import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { PlayerAction } from "../../types/Player";
import playerReducer from "./playerReducer";

export const rootReducer = combineReducers<any>({
  player: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
