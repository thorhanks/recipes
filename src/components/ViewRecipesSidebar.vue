<template>
    <div>
        <div
            class="
                font-sketch
                text-highlight1 text-4xl
                md:text-5xl
                lg:text-7xl
                mb-2
                md:mb-5
            "
        >
            BiteBook
        </div>
        <div class="mb-3 md:mb-8">
            <base-search-input
                :class="{ hidden: !navIsOpen }"
                @input="setSearchText"
            />
            <i
                v-if="navIsOpen"
                class="fal fa-th-large fa-lg ml-8 cursor-pointer"
                :class="{
                    'text-highlight1': selectedGridType === gridTypes.grid,
                    'opacity-40': selectedGridType !== gridTypes.grid,
                }"
                @click="setSelectedGridType(gridTypes.grid)"
            ></i>
            <i
                v-if="navIsOpen"
                class="fal fa-th-list fa-lg ml-2 cursor-pointer"
                :class="{
                    'text-highlight1': selectedGridType === gridTypes.list,
                    'opacity-40': selectedGridType !== gridTypes.list,
                }"
                @click="setSelectedGridType(gridTypes.list)"
            ></i>
        </div>
        <base-nav-menu
            :class="{ hidden: !navIsOpen }"
            title="Styles"
            :options="styleOptions"
            :selected-option-keys="selectedStyleKeys"
            size="lg"
            @change="setSelectedStyleKeys"
        />
        <base-nav-menu
            :class="{ hidden: !navIsOpen }"
            class="mt-3 md:mt-9"
            title="Tags"
            :options="tagOptions"
            :selected-option-keys="selectedTagKeys"
            size="md"
            @change="setSelectedTagKeys"
        />
        <div
            class="text-center opacity-50 md:hidden cursor-pointer"
            @click="navIsOpen = !navIsOpen"
        >
            <i v-if="navIsOpen" class="fas fa-caret-up"></i>
            <i v-else class="fas fa-caret-down"></i>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import sortBy from "../utilities/sort-by.js";
import actions from "../store/actions.js";
import styles from "../store/enum-styles.js";
import tags from "../store/enum-tags.js";
import gridTypes from "../store/enum-grid-types.js";
import BaseNavMenu from "./BaseNavMenu.vue";
import BaseSearchInput from "./BaseSearchInput.vue";
export default {
    name: "ViewRecipesSidebar",
    components: { BaseNavMenu, BaseSearchInput },
    data: () => ({
        styleOptions: sortBy(Object.values(styles), "label"),
        tagOptions: sortBy(Object.values(tags), "label"),
        navIsOpen: true,
        gridTypes,
    }),
    computed: {
        ...mapState({
            selectedGridType: (state) => state.app.selectedGridType,
            selectedStyleKeys: (state) => state.app.selectedStyleKeys,
            selectedTagKeys: (state) => state.app.selectedTagKeys,
        }),
    },
    methods: {
        ...mapMutations({
            setSelectedStyleKeys: actions.mutations.SET_SELECTED_STYLES_KEYS,
            setSelectedTagKeys: actions.mutations.SET_SELECTED_TAG_KEYS,
            setSearchText: actions.mutations.SET_SEARCH_TEXT,
            setSelectedGridType: actions.mutations.SET_SELECTED_GRID_TYPE,
        }),
    },
};
</script>
