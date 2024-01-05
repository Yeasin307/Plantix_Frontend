import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>

        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={Home}
        />

        <Route
          path={process.env.PUBLIC_URL + "/home"}
          component={Home}
        />

        <Route exact component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
