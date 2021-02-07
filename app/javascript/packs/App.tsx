import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyle";
import { Navigation } from "../components/Navigation";
import { CreateRecipe } from "../pages/CreateRecipe";
import { Home } from "../pages/Home";
import { AllRecipes } from "../pages/AllRecipes";
import { RecipeView } from "../pages/ViewRecipe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div className="rails-recipe">
      <GlobalStyle />
      <ToastContainer />

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipes">
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
