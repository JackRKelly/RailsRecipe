import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyle";
import { Navigation } from "../components/Navigation";
import { CreateRecipe } from "../pages/CreateRecipe";
import { Home } from "../pages/Home";
import { AllRecipes } from "../pages/AllRecipes";
import { RecipeView } from "../pages/RecipeView";

const App: React.FC = () => {
  return (
    <div className="rails-recipe">
      <GlobalStyle />
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipe">
            <AllRecipes />
          </Route>
          <Route exact path="/recipe/create">
            <CreateRecipe />
          </Route>
          <Route exact path="/recipe/view/:id">
            <RecipeView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
