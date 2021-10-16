<template>
    <div class="text-left md:text-right font-sketch">
        <div class="text-highlight1 uppercase text-xl mb-2">
            {{ title }}
        </div>
        <div
            v-for="(option, i) in options"
            :key="option.key"
            class="inline-block md:block"
        >
            <span
                class="cursor-pointer text-subtext hover:text-text"
                :class="{
                    'text-3xl': size === 'lg',
                    'text-xl': size === 'md',
                    'text-highlight2': selectedOptionKeys.includes(option.key),
                    'hover:text-highlight2': selectedOptionKeys.includes(
                        option.key
                    ),
                }"
                @click="selectOption(option.key)"
            >
                {{ option.label }}
            </span>
            <span
                v-if="i < options.length - 1"
                class="mx-2 opacity-50 md:hidden"
                >▪</span
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseNavMenu",
    props: {
        title: { type: String, default: null },
        size: {
            type: String,
            default: "lg",
            validator: (v) => ["lg", "md"].includes(v),
        },
        /**
         * @property {Object[]} options[]
         * @property {Object[]} options[].key
         * @property {Object[]} options[].label
         */
        options: { type: Array, default: () => [] },
        /**
         * @property {String[]} selectedOptionKeys[]
         */
        selectedOptionKeys: { type: Array, default: () => [] },
    },
    emits: ["change"],
    methods: {
        selectOption(optionKey) {
            let alreadySelected = this.selectedOptionKeys.includes(optionKey);
            let selectedKeys = this.selectedOptionKeys;

            if (alreadySelected) {
                selectedKeys = selectedKeys.filter((x) => x !== optionKey);
            } else {
                selectedKeys = [...this.selectedOptionKeys, optionKey];
            }
            this.$emit("change", selectedKeys);
        },
    },
};
</script>
