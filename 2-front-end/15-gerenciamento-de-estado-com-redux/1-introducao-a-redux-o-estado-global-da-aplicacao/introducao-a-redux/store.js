import { createStore } from "redux";
import reducerCombinado from ".";

const store = createStore(reducerCombinado);

console.log(store.getState());