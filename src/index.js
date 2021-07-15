import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from 'react-router-dom';
import { App } from "./App";

import configureProductsStore from './hooks-store/products-store';

configureProductsStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
