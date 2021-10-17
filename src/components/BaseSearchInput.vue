<template>
    <span>
        <i class="fal fa-search fa-sm -mr-6 opacity-40"></i>
        <input
            type="search"
            autocomplete="off"
            ref="input"
            class="rounded-full bg-text bg-opacity-5 py-1 px-7 w-36"
            v-bind="$attrs"
            @input="onInput"
        />
        <i
            class="
                fal
                fa-times
                -ml-6
                cursor-pointer
                opacity-40
                fa-sm
                hover:opacity-100
            "
            @click="clearInput"
        ></i>
    </span>
</template>

<script>
export default {
    name: "BaseSearchInput",
    emits: ["input"],
    methods: {
        onInput(e) {
            let value = e.target.value;
            if (value) value = value.trim();
            if (!value) value = null;
            this.$emit("input", value);
        },
        clearInput() {
            this.$refs.input.value = "";
            this.$emit("input", null);
        },
    },
};
</script>
