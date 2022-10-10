import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { store } from "./features/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  root
);
