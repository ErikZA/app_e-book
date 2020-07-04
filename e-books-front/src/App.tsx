import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import CircularIndeterminate from "./components/fallBack";

import { Routes } from "./routes";
import store from "./store";

const App = () => {
  return (
    <Router>
      <Suspense fallback={CircularIndeterminate}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Suspense>
    </Router>
  );
};
export default App;
