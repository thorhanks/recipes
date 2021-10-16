<template>
    <view-recipes />
</template>

<script>
import { mapState } from "vuex";
import ViewRecipes from "./components/ViewRecipes.vue";
export default {
    name: "BiteBookApp",
    components: { ViewRecipes },
    filters: {},
    props: {},
    data: () => ({}),
    computed: mapState({}),
    watch: {},
    mounted() {},
    methods: {},
};
</script>
