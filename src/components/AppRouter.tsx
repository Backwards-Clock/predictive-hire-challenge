import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
