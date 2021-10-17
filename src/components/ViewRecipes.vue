<template>
    <layout-sidebar-page>
        <template #sidebar>
            <view-recipes-sidebar />
        </template>
        <template #content>
            <view-recipes-grid
                v-if="selectedGridType === gridTypes.grid"
                @openRecipe="openRecipe"
            />
            <view-recipes-list v-else @openRecipe="openRecipe" />
            <view-recipe-modal ref="recipeModal" @close="onRecipeClose" />
        </template>
    </layout-sidebar-page>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { setUrlParameterValueMutation } from "../utilities/vuex-plugin-url-param-sync.js";
import gridTypes from "../store/enum-grid-types.js";
import LayoutSidebarPage from "./LayoutSidebarPage.vue";
import ViewRecipesSidebar from "./ViewRecipesSidebar.vue";
import ViewRecipesGrid from "./ViewRecipesGrid.vue";
import ViewRecipesList from "./ViewRecipesList.vue";
import ViewRecipeModal from "./ViewRecipeModal.vue";
export default {
    name: "ViewRecipes",
    components: {
        LayoutSidebarPage,
        ViewRecipesSidebar,
        ViewRecipesGrid,
        ViewRecipesList,
        ViewRecipeModal,
    },
    props: {},
    data: () => ({
        gridTypes,
    }),
    computed: {
        ...mapState({
            urlRecipeKey: (s) => s.urlParameters.recipekey,
            selectedGridType: (state) => state.app.selectedGridType,
        }),
        ...mapGetters(["filteredRecipes"]),
    },
    mounted() {
        if (this.urlRecipeKey) {
            let recipe = this.filteredRecipes.find(
                (r) => r.key === this.urlRecipeKey
            );
            if (recipe) this.openRecipe(recipe);
        }
    },
    methods: {
        ...mapMutations({
            setUrlParameterValueMutation,
        }),
        openRecipe(recipe) {
            this.$refs.recipeModal.$show(recipe);
            this.setUrlParameterValueMutation({
                key: "recipekey",
                value: recipe.key,
            });
        },
        onRecipeClose() {
            this.setUrlParameterValueMutation({
                key: "recipekey",
                value: null,
            });
        },
    },
};
</script>
