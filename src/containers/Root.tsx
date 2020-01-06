import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
// import DevTools from "./DevTools"
import App from "./App";
import ResultPage from "./ResultPage";

const Root = ({ store }: any) => (
  <Provider store={store}>
    <>
      <Route path="/" component={App} />
      <Route path="/:username" component={ResultPage} />
      {/* <DevTools /> */}
    </>
  </Provider>
);

export default Root;
