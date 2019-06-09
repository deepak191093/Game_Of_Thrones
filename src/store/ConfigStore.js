import { createStore } from "redux";
import ReducerBook from "./Reducer";

export default () => {
  const store = createStore(ReducerBook);
  return store;
};
