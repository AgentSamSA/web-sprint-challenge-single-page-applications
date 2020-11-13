import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>

        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Now</Link>
        </div>
      </nav>

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path={"/pizza"}>
          <Form />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
