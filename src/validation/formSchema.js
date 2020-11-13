import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .min(2, "Must be at least 2 characters long")
        .max(20, "Can be no more than 20 characters")
        .required("Enter a name for the order"),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large", "Extra Large"], "Please choose a size"),
    sauce: yup
        .string()
        .oneOf(["red", "garlic", "alfredo", "bbq"], "Please choose a sauce"),
    pepproni: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    beef: yup.boolean(),
    salami: yup.boolean(),
    bacon: yup.boolean(),
    onion: yup.boolean(),
    peppers: yup.boolean(),
    artichoke: yup.boolean(),
    spinach: yup.boolean(),
    tomato: yup.boolean(),
    cheese: yup.boolean(),
})