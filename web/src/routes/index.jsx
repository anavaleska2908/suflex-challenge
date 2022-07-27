import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home } from "../Pages/Home";


export const Routes = () => {
    return (
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
       </Switch>
    )
}