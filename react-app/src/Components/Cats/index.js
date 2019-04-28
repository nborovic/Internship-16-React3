import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CatsList from "./CatsList";
import CatDetails from "./CatDetails";
import CatCreate from "./CatCreate";
import NotFound from "../NotFound";
import CatEdit from "./CatEdit";

const Cats = () => {
  return (
    <Switch>
      <Route exact path="/cats" render={props => <CatsList {...props} />} />
      <Route
        exact
        path="/cats/create"
        render={props => <CatCreate {...props} />}
      />
      <Route exact path="/cats/404" render={props => <NotFound {...props} />} />
      <Route
        exact
        path="/cats/:id"
        render={props => <CatDetails {...props} />}
      />
      <Route
        exact
        path="/cats/edit/:id"
        render={props => <CatEdit {...props} />}
      />
      <Redirect to="/cats/404" />
    </Switch>
  );
};

export default Cats;
