<template>
    <div class="md:flex text-left">
        <div>
            <slot name="col1" />
        </div>
        <div class="py-5 md:py-0 md:flex-1 md:px-10">
            <slot name="col2" />
        </div>
        <div v-if="$slots.col3">
            <slot name="col3" />
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutThreeColumn",
};
</script>
