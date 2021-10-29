import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/sausage-and-crescent-roll-casserole.png";

export default {
    key: "sausage-and-crecent-roll-casserole",
    name: "Sausage & Crecent Roll Casserole",
    imageUrl,
    style: styles.other,
    tags: [tags.casserole, tags.pork],
    sources: [
        {
            key: uuid(),
            label: "Taste of Home",
            value: "https://www.tasteofhome.com/recipes/sausage-crescent-roll-casserole/",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Sausage",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Crescent rolls",
                    amount: "1 tube (8 oz)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Shredded pepper jack cheese",
                    amount: "2 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Eggs",
                    amount: "8 large",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "2% milk",
                    amount: "2 cups",
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
                "Shred cheese",
                "Preheat oven to 375 degrees F",
                "Cook sausage in skillet",
            ],
        },
        {
            key: uuid(),
            label: "Construct",
            directions: [
                "Unroll crescent roll dough into 13x9 baking pan",
                "Sprinkle sausage over dough",
                "Sprinkle shredded cheese over dough and meat",
                "In a bowl mix 8 eggs, 2 cups milk, salt, pepper",
                "Pour egg mix into baking pan",
            ],
        },
        {
            key: uuid(),
            label: "Bake",
            directions: [
                "Bake, uncovered 35-40 mins until inserted knife comes out clean",
                "Let stand 5-10 mins before serving",
            ],
        },
    ],
};
