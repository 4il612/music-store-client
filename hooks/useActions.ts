import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionsCreators from "../storage/actions-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
};
