import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Routing from "./Routing";
import "./assets/style.scss";

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Routing />
    </Provider>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
