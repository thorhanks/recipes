import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/taco-potion-19.jpg";

export default {
    key: "taco-potion-19",
    name: "Taco potion #19",
    imageUrl,
    style: styles.mexican,
    tags: [tags.beef],
    sources: [
        {
            key: uuid(),
            label: "Alton Brown",
            value: "https://www.foodnetwork.com/recipes/alton-brown/taco-potion-19-recipe-2115513",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Spices",
            ingredients: [
                {
                    key: uuid(),
                    label: "Chili powder",
                    amount: "2 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cumin (ground)",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cornstarch",
                    amount: "2 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Salt",
                    amount: "2 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Smoked paprika",
                    amount: "1 1/2 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Coriander (ground)",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cayenne pepper",
                    amount: "1/2 tsp",
                    calories: null,
                },
            ],
        },
    ],
    directions: [
        {
            key: uuid(),
            label: "Mix",
            directions: ["Mix together spices store for up to a month"],
        },
    ],
};
