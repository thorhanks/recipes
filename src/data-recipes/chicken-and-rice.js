import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/chicken-and-rice.jpg";

export default {
    key: "chicken-rice",
    name: "Chicken & rice",
    imageUrl,
    style: styles.other,
    tags: [tags.chicken, tags.rice, tags.instantPot],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Main ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Chicken thighs",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Red onion (diced)",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Green pepper (diced)",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Mushrooms (diced)",
                    amount: "1 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Celery stalks (diced)",
                    amount: "2",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Garlic (minced)",
                    amount: "2 cloves",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chicken broth",
                    amount: "3 1/2 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Short grain rice",
                    amount: "2 cups",
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
                    label: "Thyme",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cajun seasoning",
                    amount: "1 tbsp",
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
                "Dice the red onion, green pepper, celery, and mushrooms then set aside",
                "Mince the garlic cloves then set aside",
            ],
        },
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "In an instant pot brown the chicken thighs, then remove and set aside",
                "Add onion, green pepper, celery, and mushrooms to instant pot and saute for a few mins",
                "Turn off heat",
                "Add chicken broth, rice, and seasoning to instant pot",
                "Gently place chicken thighs on top",
                "Put lid on and cook on rice setting (10 mins), natural release",
            ],
        },
    ],
};
