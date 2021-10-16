<template>
    <div>
        <div class="uppercase text-sm mb-2 text-highlight1 font-bold">
            {{ label }}
        </div>
        <div
            v-for="item in items"
            :key="typeof item === 'string' ? item : item.key"
            class="mb-2 text-base"
        >
            <slot v-if="$slots.default" :item="item" />
            <template v-else>{{ item }}</template>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseGroupedList",
    props: {
        label: { type: String, default: null },
        items: { type: Array, default: () => [] },
    },
};
</script>
