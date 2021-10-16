module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            bgmain: "#C5E0DC",
            bgalt: "#F9F2E7",
            text: "#0A0A0A",
            subtext: "rgba(0,0,0,0.6)",
            highlight1: "#774F38",
            highlight2: "#E08E79",
        },
        fontFamily: {
            sketch: ["Cabin Sketch", "serif"],
            sans: ["Mulish", "sans-serif"],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
