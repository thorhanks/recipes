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
            <view-recipe-modal ref="recipeModal" />
        </template>
    </layout-sidebar-page>
</template>

<script>
import { mapState } from "vuex";
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
            selectedGridType: (state) => state.app.selectedGridType,
        }),
    },
    watch: {},
    mounted() {},
    methods: {
        openRecipe(recipe) {
            this.$refs.recipeModal.$show(recipe);
        },
    },
};
</script>
