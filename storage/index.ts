import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { legacy_createStore } from "redux";
import { rootReducer, RootState } from "./reducers";

const makeStore: MakeStore<RootState> = (context: Context) =>
  legacy_createStore(rootReducer);

export const wrapper = createWrapper<RootState>(makeStore, {
  debug: true,
});
