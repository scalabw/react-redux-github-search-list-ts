import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";

// Import CSS
import "shards-ui/dist/css/shards.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const store = configureStore();

// TODO: Remove all "any"
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Root store={store} />
      </Router>
    </div>
  );
};

export default App;
