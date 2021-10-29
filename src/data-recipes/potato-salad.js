import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/potato-salad.jpg";

export default {
    key: "potato-salad",
    name: "Potato salad",
    imageUrl,
    style: styles.other,
    tags: [tags.potatoes, tags.instantPot, tags.salad],
    sources: [
        {
            key: uuid(),
            label: "Tasty (video)",
            value: "https://www.youtube.com/watch?v=HkHY5e3RWCc",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Potatoes",
            ingredients: [
                {
                    key: uuid(),
                    label: "Potatoes",
                    amount: "6 medium",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Eggs",
                    amount: "4",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Water",
                    amount: "1 cup",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Main Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Celery stalks (minced)",
                    amount: "3",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Sweet onion (minced)",
                    amount: "1/4 cup",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Sauce / spices",
            ingredients: [
                {
                    key: uuid(),
                    label: "Mayonnaise",
                    amount: "1 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Dill relish",
                    amount: "2 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Yellow mustard",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Spicy brown mustard",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Garlic powder",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion powder",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cayenne pepper",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Paprika",
                    amount: "1 tsp",
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
            label: "Prep",
            directions: [
                "Mince 3 stalks celery, add to large bowl",
                "Mince 1/4 cup onion, add to bowl",
                "Wash and cut potatoes, set aside",
            ],
        },
        {
            key: uuid(),
            label: "Potatoes & eggs",
            directions: [
                "Place 1 cup water and steamer basket in the Instant Pot",
                "Add cut potatoes to steamer basket",
                "Place 4 eggs on top of the potatoes",
                "Set Instant Pot to high pressure 4 mins",
            ],
        },
        {
            key: uuid(),
            label: "Sauce",
            directions: [
                "In a small bowl mix together the sauce/spice ingredients and set aside",
            ],
        },
        {
            key: uuid(),
            label: "Mix",
            directions: [
                "When potatoes are done cooking add to large bowl",
                "Peel and chop eggs, add to large bowl",
                "Add sauce mixture to large bowl and gently mix",
            ],
        },
    ],
};
