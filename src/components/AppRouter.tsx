import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Recipes from "../pages/Recipes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute header={{ title: "Home" }} component={Home} exact path="/" />
        <PublicRoute header={{ title: "Login" }} component={Login} exact path="/login" />
        <PublicRoute header={{ title: "About" }} component={About} exact path="/about" />
        <PublicRoute header={{ title: "Recipes" }} component={Recipes} exact path="/recipes" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
