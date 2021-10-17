import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/chipotle-chicken-marinade.jpg";

export default {
    key: "chipotle-chicken-marinade",
    name: "Chipotle chicken marinade",
    imageUrl,
    style: styles.mexican,
    tags: [tags.chicken, tags.marinade],
    sources: [],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Cumin",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Garlic (minced)",
                    amount: "4 cloves",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Oregano",
                    amount: "1 tsp",
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
                    label: "Pepper",
                    amount: "1 tsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chili powder",
                    amount: "1 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Oil",
                    amount: "2 tbsp",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chipotle peppers in adobo sauce",
                    amount: "1 (7 oz) can",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Water",
                    amount: "3/4 cup",
                    calories: null,
                },
            ],
        },
    ],
    directions: [
        {
            key: uuid(),
            label: "Blend",
            directions: [
                "Add all ingredients to a blender and blend smooth",
                "Pour over raw chicken, let marinade 4-24 hrs",
            ],
        },
    ],
};
