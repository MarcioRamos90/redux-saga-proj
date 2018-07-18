import React, { Component } from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

import reducers from "./reducers/index";
import Info from "./info";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* ola() {
  console.log("hello from saga");
  const dados = yield axios.get("http://httpbin.org/ip");
  console.log(dados);
}

sagaMiddleware.run(ola);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Info />
      </Provider>
    );
  }
}

export default App;
