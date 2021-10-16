import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/tuna-casserole.jpg";

export default {
    key: uuid(),
    name: "Tuna casserole",
    imageUrl,
    style: styles.other,
    tags: [tags.seafood, tags.casserole, tags.pasta],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Egg noodles",
                    amount: "1 (12 oz) package",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion (diced)",
                    amount: "1/4 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cheddar cheese",
                    amount: "2 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Frozen green beans",
                    amount: "1 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Tuna",
                    amount: "2 (5 oz cans)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Condensed cream of mushroom soup",
                    amount: "2 (10.75 oz cans)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Mushrooms",
                    amount: "1/4 cup",
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
                "Mince 1/4 cup onion and 1/4 cup mushrooms then set aside",
                "Shred 2 cups cheddar cheese then set aside",
                "Drain 2 cans tuna then set aside",
            ],
        },
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "Bring large pot of lightly salted water to boil",
                "Cook package of egg noodles (~8-10 mins), then drain",
                "Turn on oven to 425 degrees F",
                "In large bowl combine everything (but only half of cheese)",
                "Transfer to 9x13 baking dish",
                "Top with rest of cheese",
                "Bake 15-20 mins",
            ],
        },
    ],
};
