import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/broccoli-chicken-casserole.png";

export default {
    key: "broccoli-chicken-casserole",
    name: "Broccoli chicken casserole",
    imageUrl,
    style: styles.other,
    tags: [tags.casserole, tags.chicken],
    sources: [
        {
            key: uuid(),
            label: "Taste of Home",
            value: "https://www.tasteofhome.com/recipes/contest-winning-broccoli-chicken-casserole/",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Chicken",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chicken stuffing mix",
                    amount: "1 package (6 oz)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Frozen broccoli",
                    amount: "1 cup thawed",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Condensed broccoli cheese soup",
                    amount: "1 can (10 3/4 oz)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cheddar cheese",
                    amount: "1 cup shredded",
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
                "Add 2 cups water to instant pot, add chicken, cook under pressure for 8 mins",
                "After chicken is cooked, cut into bite sized cubes, set aside",
                "Set aside 1 cup frozen broccoli",
                "Shred cheese, set aside",
                "Preheat oven to 350 degrees F",
            ],
        },
        {
            key: uuid(),
            label: "Stuffing",
            directions: [
                "In saucepan boil 1 1/2 cups water and 4 tbsp butter",
                "Stir in stuffing mix, cover, remove from heat",
            ],
        },
        {
            key: uuid(),
            label: "Combine and bake",
            directions: [
                "In a large bowl combine 1 can soup, cubed chicken, and 1 cup broccoli",
                "Transfer mix to baking dish",
                "Spoon stuffing on top",
                "Sprinkle cheese on top",
                "Bake covered for 20 mins",
                "Uncover and bake for 10-15 mins more",
            ],
        },
    ],
};
