import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/red_beans_and_rice.jpg";

export default {
    key: uuid(),
    name: "Red beans & rice",
    imageUrl,
    style: styles.cajun,
    tags: [tags.beans, tags.rice, tags.onePotMeal, tags.pork],
    sources: [
        {
            key: uuid(),
            label: "America's Test Kitchen: How to make red beans and rice",
            value: "https://www.youtube.com/watch?v=CZmklbHvo5Y",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Main",
            ingredients: [
                {
                    key: uuid(),
                    label: "Dry mexican/small red beans or kidney beans",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Dry black beans",
                    amount: "1/3 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Bacon",
                    amount: "4 slices",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Fully cooked sausage",
                    amount: "8 oz",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Onion",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Green pepper",
                    amount: "1",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Celery",
                    amount: "1 stalk",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chicken broth",
                    amount: "3 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Water",
                    amount: "6 cups",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Tabasco sauce",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Garlic",
                    amount: "3 cloves",
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
                    label: "Paprika",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Black pepper",
                    amount: "1/4 tsp",
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
                    label: "Thyme",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Bay leaves",
                    amount: "2",
                    calories: null,
                },
            ],
        },
    ],
    directions: [
        {
            key: uuid(),
            label: "24 hrs Before",
            directions: [
                "Add 3 tbsp of salt to a large container of water, stir",
                "Add dry black and red beans to water",
                "Soak beans for 8-24 hrs",
            ],
        },
        {
            key: uuid(),
            label: "Prep",
            directions: [
                "Mince onion, green pepper, and celery then set aside",
                "Rinse and drain beans then set aside",
                "Measure out spices into a dish and set aside",
                "Mince garlic cloves and add to spices",
                "Cut up sausage and set aside",
                "Cut bacon into tiny pieces then add to large pot",
            ],
        },
        {
            key: uuid(),
            label: "Cook",
            directions: [
                "Set large pot with bacon on low to mid heat and cook till browned and fat is rendered",
                "Add onion, green pepper, celery to pot and cook till glassy/tender",
                "Add spices and garlic to pot then cook till fragrant",
                "Add 3 cups chicken stock to pot",
                "Add 6 cups water to pot",
                "Add soaked beans to pot",
                "Bring pot to a boil",
                "Reduce heat until strong simmer, cook for 45 mins",
                "Add sausage to pot",
                "Add 1 tbsp Tabasco sauce to pot",
                "Simmer until desired doneness/thickness",
                "Turn off heat and add a small dash of Tabasco",
                "Serve over rice",
            ],
        },
    ],
};
