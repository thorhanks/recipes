<template>
    <base-modal ref="modal">
        <template #header>
            <div class="flex">
                <div
                    class="w-28 h-28 bg-cover rounded-lg hidden md:block"
                    :style="{
                        'background-image': `url(../../public/recipe-photos/${imageFileName})`,
                    }"
                />
                <div class="flex-1 md:pl-8">
                    <div class="text-5xl font-sketch text-highlight1">
                        {{ name }}
                    </div>
                    <div class="mt-2 text-subtext">
                        {{ styleLabel }}<span class="mx-2">▪</span>
                        <a
                            v-for="source in sources"
                            :key="source.key"
                            :href="source.value"
                            target="_blank"
                            class="hover:text-highlight2 underline"
                        >
                            {{ source.label }}
                        </a>
                    </div>
                    <div class="mt-2 text-subtext">
                        <span
                            v-for="(t, i) in tags.map((x) => x.label)"
                            :key="t"
                        >
                            {{ t
                            }}<span v-if="i < tags.length - 1" class="px-2"
                                >▪</span
                            >
                        </span>
                    </div>
                </div>
            </div>
        </template>
        <template #content>
            <layout-three-column>
                <template #col1>
                    <base-grouped-list
                        v-for="group in ingredients"
                        :key="group.key"
                        :label="group.label"
                        :items="group.ingredients"
                        class="mb-5"
                        v-slot="{ item }"
                    >
                        <div class="flex items-center">
                            <div class="font-bold whitespace-nowrap">
                                {{ item.amount }}
                            </div>
                            <div class="px-2">▪</div>
                            <div>{{ item.label }}</div>
                        </div>
                    </base-grouped-list>
                </template>
                <template #col2>
                    <base-grouped-list
                        v-for="group in directions"
                        :key="group.key"
                        :label="group.label"
                        :items="group.directions"
                        class="mb-5"
                        v-slot="{ item }"
                    >
                        <div class="flex items-center">
                            <div class="pr-3">▪</div>
                            <div>{{ item }}</div>
                        </div>
                    </base-grouped-list>
                </template>
            </layout-three-column>
        </template>
    </base-modal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import BaseGroupedList from "./BaseGroupedList.vue";
import LayoutThreeColumn from "./LayoutThreeColumn.vue";
export default {
    name: "ViewRecipeModal",
    components: { BaseModal, BaseGroupedList, LayoutThreeColumn },
    data: () => ({
        name: null,
        styleLabel: null,
        sources: [],
        ingredients: [],
        directions: [],
        tags: [],
        imageFileName: null,
    }),
    methods: {
        $show(recipe) {
            this.name = recipe.name;
            this.styleLabel = recipe.style.label;
            this.sources = recipe.sources;
            this.ingredients = recipe.ingredients;
            this.directions = recipe.directions;
            this.tags = recipe.tags;
            this.imageFileName = recipe.imageFileName;
            this.$refs.modal.$show();
        },
    },
};
</script>
