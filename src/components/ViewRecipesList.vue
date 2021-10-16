<template>
    <div>New component</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "ViewRecipeList",
    filters: {},
    props: {},
    data: () => ({}),
    computed: {
        ...mapState({
            recipes: (state) => state.app.recipes,
        }),
    },
    watch: {},
    mounted() {},
    methods: {
        ...mapMutations({}),
    },
};
</script>

<style scoped></style>
