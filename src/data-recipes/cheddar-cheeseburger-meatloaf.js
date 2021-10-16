import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/cheddar-cheeseburger-meatloaf.jpg";

export default {
    key: uuid(),
    name: "Tuna salad",
    imageUrl,
    style: styles.other,
    tags: [tags.beef],
    sources: [
        {
            key: uuid(),
            label: "BudgetBytes",
            value: "https://www.budgetbytes.com/cheddar-cheeseburger-meatloaf/",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Main ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Ground beef",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Breadcrumbs",
                    amount: "1/4 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Egg",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion (minced)",
                    amount: "1/2",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Sharp cheddar (diced)",
                    amount: "4 oz",
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
                    label: "Smoked paprika",
                    amount: "1 tsp",
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
                    label: "Salt",
                    amount: "3/4 tsp",
                    calories: null,
                },
            ],
        },
        {
            key: uuid(),
            label: "Glaze",
            ingredients: [
                {
                    key: uuid(),
                    label: "Ketchup",
                    amount: "1/2 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Brown sugar",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Yellow mustard",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Worcestershire",
                    amount: "1 tsp",
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
                "Dice onion, set aside",
                "Dice cheddar, set aside",
                "Mix glaze ingredients together in a small bowl, set aside",
                "Turn on oven to 350 degrees F",
            ],
        },
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "Add ground beef to a large bowl",
                "Add rest of main ingredients and spices to the bowl",
                "Mix meat mixture together with your hands",
                "Place meat mixture into baking dish, shape into loaf",
                "Spread glaze over meat",
                "Bake for 50 mins until internal temp is 160 degrees F",
            ],
        },
    ],
};
