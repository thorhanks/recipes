import { createStore } from "vuex";
import moduleApp from "./module-app.js";

export default createStore({
    modules: {
        app: moduleApp,
    },
});
