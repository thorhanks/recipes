<template>
    <div>
        <div
            class="
                font-sketch
                text-highlight1 text-7xl
                md:text-5xl
                lg:text-7xl
                mb-5
            "
        >
            BiteBook
        </div>
        <base-nav-menu
            title="Styles"
            :options="styleOptions"
            :selected-option-keys="selectedStyleKeys"
            size="lg"
            @change="setSelectedStyleKeys"
        />
        <base-nav-menu
            class="mt-9"
            title="Tags"
            :options="tagOptions"
            :selected-option-keys="selectedTagKeys"
            size="md"
            @change="setSelectedTagKeys"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import sortBy from "../utilities/sort-by.js";
import actions from "../store/actions.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import BaseNavMenu from "./BaseNavMenu.vue";
export default {
    name: "ViewRecipesSidebar",
    components: { BaseNavMenu },
    data: () => ({
        styleOptions: sortBy(Object.values(styles), "label"),
        tagOptions: sortBy(Object.values(tags), "label"),
    }),
    computed: {
        ...mapState({
            selectedStyleKeys: (state) => state.app.selectedStyleKeys,
            selectedTagKeys: (state) => state.app.selectedTagKeys,
        }),
    },
    methods: {
        ...mapMutations({
            setSelectedStyleKeys: actions.mutations.SET_SELECTED_STYLES_KEYS,
            setSelectedTagKeys: actions.mutations.SET_SELECTED_TAG_KEYS,
        }),
    },
};
</script>
