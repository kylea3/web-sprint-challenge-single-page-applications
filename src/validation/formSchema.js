import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required for pickup!")
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large"], "Size is required!"),
    sauce: yup.string()
    .oneOf(["originalRed", "garlicRanch", 'bbqSauce', 'spinachAlfredo'], 'Sauce is required!'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    italianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onion: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    substitute: yup.boolean(),
    pizzasOrdered: yup
        .string()
        .oneOf(['1','2','3','4','5','6','7','8','9'], "Pizzas to order must be a number from 1-9! If you are ordering more than 9 pizzas, call in your order.")
    
})

export default formSchema;