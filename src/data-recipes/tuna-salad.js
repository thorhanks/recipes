import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/tuna-salad.jpg";

export default {
    key: "tuna-salad",
    name: "Tuna salad",
    imageUrl,
    style: styles.other,
    tags: [tags.seafood],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Main ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Tuna",
                    amount: "2 (6 oz) cans",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Celery stalk (minced)",
                    amount: "2 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Red onion (minced)",
                    amount: "2 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Mayonnaise",
                    amount: "1/3",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Mustard",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Lemon juice",
                    amount: "To taste",
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
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Pepper",
                    amount: "to taste",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Salt",
                    amount: "to taste",
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
                "Dice celery and red onion, add to bowl",
                "Drain tuna, add to bowl",
                "Add mayonnaise, mustard, and seasonings to bowl",
                "Mix well",
            ],
        },
    ],
};
