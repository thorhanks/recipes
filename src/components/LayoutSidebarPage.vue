<template>
    <div class="h-full flex flex-col text-center md:flex-row">
        <div
            class="p-5 pb-2 md:text-right md:p-14"
            style="background-color: rgba(255, 255, 255, 0.25)"
        >
            <slot name="sidebar" />
        </div>
        <div class="flex-1 overflow-y-auto p-5 md:text-left md:p-14">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutSidebarPage",
};
</script>
