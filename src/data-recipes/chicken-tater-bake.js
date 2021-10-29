import uuid from "../utilities/generate-uuid.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import imageUrl from "../assets/recipe-photos/chicken-tater-bake.png";

export default {
    key: "chicken-tater-bake",
    name: "Chicken tater bake",
    imageUrl,
    style: styles.other,
    tags: [tags.casserole, tags.chicken, tags.instantPot],
    sources: [
        {
            key: uuid(),
            label: "Taste of Home",
            value: "https://www.tasteofhome.com/recipes/chicken-tater-bake/",
        },
    ],
    ingredients: [
        {
            key: uuid(),
            label: "Ingredients",
            ingredients: [
                {
                    key: uuid(),
                    label: "Condensed cream of chicken soup",
                    amount: "2 cans",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "2% milk",
                    amount: "1/2 cup",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Butter",
                    amount: "1/4 cup cubed",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Chicken",
                    amount: "1 lb",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Frozen veggies",
                    amount: "16 oz",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Cheddar cheese",
                    amount: "1 1/2 cups shredded",
                    calories: null,
                },
                {
                    key: uuid(),
                    label: "Tater Tots",
                    amount: "1 package (32 oz)",
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
                "Add 2 cups water to instant pot",
                "Add chicken to instant pot and cook under pressure for 8 mins",
                "After chicken is done, cut into bite sized cubes",
                "Shred cheese",
                "Preheat oven to 400 degrees F",
            ],
        },
        {
            key: uuid(),
            label: "Soup",
            directions: [
                "In large sausepan combine 2 cans soup, 1/2 cup milk, 1/4 cup butter",
                "Cook over medium heat until heated through",
                "Stir in chicken, frozen veggies, and 1 cup cheese",
            ],
        },
        {
            key: uuid(),
            label: "Bake",
            directions: [
                "Transfer soup mixture to baking dishes",
                "Place tater tots along top",
                "Bake uncovered 25-30 mins until bubbling",
                "Sprinkle remaining cheese on top",
                "Bake a few mins more until cheese is melted",
            ],
        },
    ],
};
