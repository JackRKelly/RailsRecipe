import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
