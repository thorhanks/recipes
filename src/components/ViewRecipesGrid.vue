<template>
    <div
        class="
            grid grid-flow-row
            gap-10
            grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
        "
    >
        <div
            v-for="recipe in filteredRecipes"
            :key="recipe.key"
            class="
                flex flex-col
                shadow-lg
                h-52
                2xl:h-72
                cursor-pointer
                rounded-lg
                bg-bgalt
                opacity-90
                hover:opacity-100
            "
            @click="recipeClick(recipe)"
        >
            <div
                class="flex-1 rounded-t-lg bg-cover"
                :style="{
                    'background-image': `url(../../public/recipe-photos/${recipe.imageFileName})`,
                }"
            />
            <div class="px-4 py-2 text-left rounded-b-lg font-sans">
                <div class="text-base text-text truncate">
                    {{ recipe.name }}
                </div>
                <div class="text-highlight1 text-xs truncate">
                    {{ recipe.tags.map((x) => x.label).join(" ▪ ") }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    name: "ViewRecipeGrid",
    emits: ["openRecipe"],
    computed: {
        ...mapState({}),
        ...mapGetters(["filteredRecipes"]),
    },
    methods: {
        recipeClick(recipe) {
            this.$emit("openRecipe", recipe);
        },
    },
};
</script>
