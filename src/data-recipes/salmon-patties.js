import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/salmon-patties.jpg";

export default {
    key: "salmon-patties",
    name: "Salmon patties",
    imageUrl,
    style: styles.other,
    tags: [tags.seafood],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Salmon",
                    amount: "2 (14.75 oz) cans",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Green onions (minced)",
                    amount: "6",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Eggs",
                    amount: "2",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Breadcrumbs",
                    amount: "1/2 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Parmesan cheese (grated)",
                    amount: "1/2 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Lime (jucied)",
                    amount: "1",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Spices",
            ingredients: [
                {
                    key: uuid(),
                    label: "Paprika",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Parsley",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Pepper",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Salt",
                    amount: "1 tsp",
                    calories: null,
                },
            ],
        },
    ],
    directions: [
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "Mince green onions add to medium bowl",
                "Grate 1/2 parmesan cheese, add to bowl",
                "Drain salmon and pick out the good meat and add to bowl",
                "Add 2 eggs to bowl",
                "Add 1/2 cup breadcrumbs to bowl",
                "Add spices to bowl",
                "Add lime juice to bowl",
                "Mix well form into patties and fry in a skillet",
            ],
        },
    ],
};
