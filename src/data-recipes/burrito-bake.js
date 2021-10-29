import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/burrito-bake.png";

export default {
    key: "burrito-bake",
    name: "Burrito bake",
    imageUrl,
    style: styles.mexican,
    tags: [tags.casserole, tags.beef],
    sources: [
        {
            key: uuid(),
            label: "Taste of Home",
            value: "https://www.tasteofhome.com/recipes/burrito-bake/",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Ground beef",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Refried beans",
                    amount: "1 can (16 oz)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion",
                    amount: "1/4 cup chopped",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Taco seasoning",
                    amount: "1 packet",
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
                    label: "Cheddar cheese",
                    amount: "1-2 cups shredded",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Monterey Jack",
                    amount: "1-2 cups shredded",
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
                "Chop onion",
                "Preheat oven to 350 degrees F",
            ],
        },
        {
            key: uuid(),
            label: "Cook, combine, & bake",
            directions: [
                "In a skillet/pot cook the beef, drain",
                "Add 1 can refried beans",
                "Add chopped onion",
                "Add taco seasoning packet",
                "Unroll crescent roll dough into 13x9 baking dish",
                "Spread beef mixture over dough",
                "Sprinkle cheese on top",
                "Bake uncovered 30 mins",
            ],
        },
    ],
};
