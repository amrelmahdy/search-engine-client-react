import React from 'react';
import style from "./css/style.scss";
import Routes from "./Routes";
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
      <div className="app">
        <Router>
          <Routes />
        </Router>
      </div>
  );
}

export default App;
