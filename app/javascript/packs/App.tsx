import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

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
              <Link to="/recipe">Recipe</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
          <Route exact path="/recipe/view/:id">
            <Recipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
