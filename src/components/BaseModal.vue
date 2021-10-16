<template>
    <div
        v-if="show"
        class="
            absolute
            top-0
            left-0
            w-screen
            h-screen
            bg-bgmain
            flex flex-col
            py-8
            md:py-14
        "
    >
        <div
            class="
                absolute
                top-6
                right-7
                cursor-pointer
                opacity-70
                hover:opacity-100 hover:text-highlight2
            "
            @click="close"
        >
            <i class="fal fa-window-close fa-2x"></i>
        </div>
        <div class="text-left pb-8 px-8 md:px-14">
            <slot name="header" />
        </div>
        <div class="flex-1 overflow-y-auto px-8 md:px-14">
            <slot name="content" />
        </div>
        <div class="px-8 md:px-14">
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseModal",
    data: () => ({
        show: false,
        escKeyHandler: null,
    }),
    mounted() {
        this.addEscKeyListener();
    },
    destroyed() {
        this.removeEscKeyListener();
    },
    methods: {
        $show() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
        addEscKeyListener() {
            this.escKeyHandler = (e) => {
                if (e.key === "Escape") this.close();
            };
            window.addEventListener("keyup", this.escKeyHandler);
        },
        removeEscKeyListener() {
            window.removeEventListener("keyup", this.escKeyHandler);
        },
    },
};
</script>
