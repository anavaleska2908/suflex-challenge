import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";


export const Routes = () => {
    return (
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/signup">
              <Signup />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route exact path="/dashboard">
              <Dashboard />
          </Route>
       </Switch>
    )
}