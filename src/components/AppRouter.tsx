import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Recipes from "../pages/Recipes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={About} exact path="/about" />
        <Route component={Recipes} exact path="/recipes" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
