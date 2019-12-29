import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import configureStore from "./store/configureStore"
import Root from './containers/Root';

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
}

export default App;
