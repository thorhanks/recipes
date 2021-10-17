import sortBy from "../utilities/sort-by.js";
import actions from "./actions";
import gridTypes from "../store/enum-grid-types.js";
import recipes from "../data-recipes/recipes.js";

export default {
    state: {
        recipes: recipes,
        selectedGridType: gridTypes.grid,
        selectedStyleKeys: [],
        selectedTagKeys: [],
        searchText: null,
    },
    getters: {
        filteredRecipes: (state) => {
            return sortBy(
                state.recipes.filter((r) => {
                    // IF there are no filters
                    if (
                        state.searchText == null &&
                        state.selectedStyleKeys.length === 0 &&
                        state.selectedTagKeys.length === 0
                    ) {
                        return true;
                    }

                    // IF search exists and it matches recipe name
                    let matchesSearch = (r.name || "")
                        .toLowerCase()
                        .includes((state.searchText || "").toLowerCase());
                    if (state.searchText != null && matchesSearch) return true;

                    // IF recipe style matches
                    if (state.selectedStyleKeys.includes(r.style.key))
                        return true;

                    // IF recipe tags match
                    let recipeTagKeys = r.tags.map((x) => x.key);
                    for (let i = 0; i < state.selectedTagKeys.length; i++) {
                        let selectedKey = state.selectedTagKeys[i];
                        if (recipeTagKeys.includes(selectedKey)) return true;
                    }

                    // Nothing matched
                    return false;
                }),
                "name"
            );
        },
    },
    mutations: {
        [actions.mutations.SET_SELECTED_GRID_TYPE](state, gridType) {
            state.selectedGridType = gridType;
        },
        [actions.mutations.SET_SELECTED_STYLES_KEYS](state, keys) {
            state.selectedStyleKeys = keys;
        },
        [actions.mutations.SET_SELECTED_TAG_KEYS](state, keys) {
            state.selectedTagKeys = keys;
        },
        [actions.mutations.SET_SEARCH_TEXT](state, searchText) {
            state.searchText = searchText;
        },
    },
    actions: {},
};
``;
