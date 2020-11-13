import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Home from "./Home";
import Form from "./Form";
import schema from "./validation/formSchema";

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

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
}

const initialOrders = [];

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const changeForm = (name, input) => {
    yup.reach(schema, name)
    .validate(input)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
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
    postNewOrder(newOrder);
  }

  const postNewOrder = newOrder => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res.data);
        setOrders([res.data, ...orders]);
        console.log(orders);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log("something went wrong!", err);
        setFormValues(initialFormValues);
      });
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

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
          submit={submitOrder}
          errors={formErrors}
          disabled={disabled}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
