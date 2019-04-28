import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogsList from "./DogsList";
import DogDetails from "./DogDetails";
import DogCreate from "./DogCreate";
import NotFound from "../NotFound";
import DogEdit from "./DogEdit";

const Dogs = () => {
  return (
    <Switch>
      <Route exact path="/dogs" render={props => <DogsList {...props} />} />
      <Route
        exact
        path="/dogs/create"
        render={props => <DogCreate {...props} />}
      />
      <Route exact path="/dogs/404" render={props => <NotFound {...props} />} />
      <Route
        exact
        path="/dogs/:id"
        render={props => <DogDetails {...props} />}
      />
      <Route
        exact
        path="/dogs/edit/:id"
        render={props => <DogEdit {...props} />}
      />
      <Redirect to="/dogs/404" />
    </Switch>
  );
};

export default Dogs;
