import React from "react";

export default function Form(props) {
    const { values, toppings, change, submit, errors, disabled } = props;

    const onChange = (event) => {
        const { value, name, type, checked } = event.target;
        const updatedValue = type === "checkbox" ? checked : value;
        change(name, updatedValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return (
        <form onSubmit={onSubmit}>
            <h3>Build Your Own Pizza</h3>

            <img alt="pizza" />

            <h2>Build Your Own Pizza</h2>

            <div>
                <label>Name for the Order:</label>
                <p>{errors.name}</p>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
            </div>

            <div>
                <h2>Choice of Size</h2>
                <p>Required</p>
                <p>{errors.size}</p>
                <select value={values.size} name="size" onChange={onChange}>
                    <option value="">Select</option>
                    <option value="Small" name="small">Small - 10"</option>
                    <option value="Medium" name="medium">Medium - 12"</option>
                    <option value="Large" name="large">Large - 14"</option>
                    <option value="Extra Large" name="extraLarge">Extra Large - 18"</option>
                </select>
            </div>

            <div>
                <h2>Choice of Sauce</h2>
                <p>Required</p>
                <p>{errors.sauce}</p>

                <label>Classic Red
                    <input
                        type="radio"
                        name="sauce"
                        value="red"
                        checked={values.sauce === "red"}
                        onChange={onChange}
                    />
                </label>

                <label>Our Famous Garlic Parmesan
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic"
                        checked={values.sauce === "garlic"}
                        onChange={onChange}
                    />
                </label>


                <label>Creamy Alfredo
                    <input
                        type="radio"
                        name="sauce"
                        value="alfredo"
                        checked={values.sauce === "alfredo"}
                        onChange={onChange}
                    />
                </label>


                <label>Sweet BBQ
                    <input
                        type="radio"
                        name="sauce"
                        value="bbq"
                        checked={values.sauce === "bbq"}
                        onChange={onChange}
                    />
                </label>

            </div>

            <div>
                <h2>Add Toppings</h2>
                <p>Choose as many as you'd like!</p>

                <div>
                    {toppings.map(topping => {
                        return (
                            <label>{topping}
                                <input
                                    type="checkbox"
                                    name={topping.toLowerCase()}
                                    checked={values.topping}
                                    onChange={onChange}
                                />
                            </label>
                        );
                    })}
                </div>
            </div>

            <div>
                <h2>Special Instructions</h2>

                <input
                    type="text"
                    name="instructions"
                    value={values.instructions}
                    placeholder="Special requests go here (max 100 chars.)"
                    onChange={onChange}
                    className="instructions"
                />
            </div>

            <button disabled={disabled}>Add to Order</button>
        </form>
    );
}