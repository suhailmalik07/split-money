import React from "react";
import { Route, Switch } from "react-router-dom";
import AddBoard from "../Pages/AddBoard";
import Dashboard from "../Pages/Dashboard";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/add" exact component={AddBoard} />
    </Switch>
  );
};

export default index;
