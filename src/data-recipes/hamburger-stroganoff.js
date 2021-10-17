import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/hamburger-stroganoff.jpg";

export default {
    key: "hamburger-stroganoff",
    name: "Hamburger stroganoff",
    imageUrl,
    style: styles.other,
    tags: [tags.beef, tags.pasta, tags.instantPot],
    sources: [],
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
                    label: "Onion (diced)",
                    amount: "1/2",
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
                    label: "Mushrooms (diced)",
                    amount: "1 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Green pepper (diced)",
                    amount: "4 oz",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cream of mushroom soup",
                    amount: "1 (10.5 oz) can",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Beef broth",
                    amount: "3 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Egg noodles",
                    amount: "3 cups (uncooked)",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Sour cream",
                    amount: "1 cup",
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
                    label: "Salt",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Pepper",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Flour",
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
                "Dice the onion, green pepper, and mushrooms, set aside",
                "Mince the garlic",
            ],
        },
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "Saute onion, green pepper, and mushrooms in instant pot",
                "Add ground beef and brown",
                "Add garlic",
                "Stir in 1 tbsp of flour",
                "Turn off heat",
                "Add 3 cups beef broth, 1 can of soup, and salt/pepper",
                "Add 3 cups of egg noodles",
                "Place lid on instant pot and cook pressure 8 mins (natural release)",
                "Stir in 1 cup sour cream",
            ],
        },
    ],
};
