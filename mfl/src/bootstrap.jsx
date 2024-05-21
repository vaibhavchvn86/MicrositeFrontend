import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { Provider } from "react-redux";
import reducers from './Reducers/reducer'
import { createStore } from 'redux';

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <StrictMode>
    <BrowserRouter basename="/mfl">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
