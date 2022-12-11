import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required for pickup!")
        .min(3, 'Name must be at least 3 characters long!'),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Size is required!"),
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
    special: yup
        .string()
        .trim()
    
})

export default formSchema;