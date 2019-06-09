import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./Router/Router";
import configureStore from "./store/ConfigStore";

const store = configureStore();

store.subscribe(() => {
  localStorage.setItem("Books", JSON.stringify(store.getState()));
  // console.log("store",store.getState());
});

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
