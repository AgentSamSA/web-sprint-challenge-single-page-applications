import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const toppings = ["Pepperoni", "Sausage", "Chicken", "Beef", "Salami", "Bacon", "Onion", "Peppers", "Artichoke", "Spinach", "Tomato", "Cheese"];

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepproni: false,
  sausage: false,
  chicken: false,
  beef: false,
  salami: false,
  bacon: false,
  onion: false,
  peppers: false,
  artichoke: false,
  spinach: false,
  tomato: false,
  cheese: false,
  instructions: "",
}

const initialOrders = [];

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeForm = (name, input) => {
    setFormValues({
      ...formValues,
      [name]: input,
    });
  }

  const submitOrder = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.size.trim(),
      pepproni: formValues.pepproni,
      sausage: formValues.sausage,
      chicken: formValues.chicken,
      beef: formValues.beef,
      salami: formValues.salami,
      bacon: formValues.bacon,
      onion: formValues.onion,
      peppers: formValues.peppers,
      artichoke: formValues.artichoke,
      spinach: formValues.spinach,
      tomato: formValues.tomato,
      cheese: formValues.cheese,
      instructions: formValues.instructions,
    }
    setOrders([...orders, newOrder]);
  }

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
          <Form
          values={formValues}
          toppings={toppings}
          change={changeForm}
          submit={submitOrder}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
