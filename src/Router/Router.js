import React from "react";
import AddBooks from "./../components/AddBooks";
import Characters from "./../components/Characters";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AddBooks} exact={true} />
        <Route path="/characters" component={Characters} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
