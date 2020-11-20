import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import RecipeView from "../pages/RecipeView";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />

      <nav id="navigation">
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
          <RecipeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
