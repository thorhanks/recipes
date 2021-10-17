import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/quinoa-salad.jpg";

export default {
    key: uuid(),
    name: "Quinoa salad",
    imageUrl,
    style: styles.mexican,
    tags: [tags.salad, tags.quinoa, tags.instantPot],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Quinoa ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Quinoa",
                    amount: "2 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Water",
                    amount: "3 cups",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Salad ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Jalapeno (diced)",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion (diced)",
                    amount: "1/2",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Garlic (minced)",
                    amount: "5 cloves",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Bell pepper (diced)",
                    amount: "1/2",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Corn",
                    amount: "1 can",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Black beans",
                    amount: "1 can",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cilantro (chopped)",
                    amount: "1/4 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Tomatoes (diced)",
                    amount: "2",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Sauce",
            ingredients: [
                {
                    key: uuid(),
                    label: "Olive oil",
                    amount: "1/4 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cumin",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Salt",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Limes (jucied)",
                    amount: "2",
                    calories: null,
                },
            ],
        },
    ],
    directions: [
        {
            key: uuid(),
            label: "Quinoa",
            directions: [
                "Add 2 cups quinoa and 3 cups water to instant pot",
                "Cook high pressure for 1 min then natural release for 10 mins",
            ],
        },
        {
            key: uuid(),
            label: "Salad",
            directions: [
                "While quinoa is cooking get a large bowl",
                "Chop/drain all salad ingredients and add each to bowl",
                "In a small bowl mix together sauce ingredients",
                "When quinoa is done add to bowl and combine well",
                "Drizzle sauce over quinoa salad mix and mix well",
            ],
        },
    ],
};
