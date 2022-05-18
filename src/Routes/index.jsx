import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashbord from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route exact path="/register/">
        <Register />
      </Route>
      <Route exact path="/home/:user_id">
        <Dashbord auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;
