import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./Components/Dogs/";
import Home from "./Components/Home";
import Cats from "./Components/Cats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/dogs" render={props => <Dogs {...props} />} />
          <Route path="/cats" render={props => <Cats {...props} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
