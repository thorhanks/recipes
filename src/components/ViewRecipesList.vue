<template>
    <div>
        <div
            v-for="(recipe, i) in filteredRecipes"
            :key="recipe.key"
            class="
                py-4
                md:py-6 md:px-3
                border-border-light
                flex
                hover:bg-white hover:bg-opacity-20
                cursor-pointer
                text-left
            "
            :class="{ 'border-t': i != 0 }"
            @click="recipeClick(recipe)"
        >
            <div
                class="h-20 w-20 bg-cover rounded-lg mr-4"
                :style="{
                    'background-image': `url(${recipe.imageUrl})`,
                }"
            />
            <div class="flex-1 truncate">
                <div class="truncate font-sketch text-2xl text-highlight1">
                    {{ recipe.name }}
                </div>
                <div class="truncate text-sm text-subtext">
                    {{ recipe.tags.map((x) => x.label).join(", ") }}
                </div>
                <div class="truncate text-sm text-subtext">
                    {{ recipe.style.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    name: "ViewRecipeList",
    props: {},
    data: () => ({}),
    computed: {
        ...mapState({
            recipes: (state) => state.app.recipes,
        }),
        ...mapGetters(["filteredRecipes"]),
    },
    watch: {},
    mounted() {},
    methods: {
        recipeClick(recipe) {
            this.$emit("openRecipe", recipe);
        },
    },
};
</script>
