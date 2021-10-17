import { createStore } from "vuex";
import moduleApp from "./module-app.js";
import createUrlParamSyncPlugin from "../utilities/vuex-plugin-url-param-sync.js";

const urlParamSyncPlugin = createUrlParamSyncPlugin([
    {
        key: "recipekey",
        default: null,
        history: true,
    },
]);

export default createStore({
    plugins: [urlParamSyncPlugin],
    modules: {
        app: moduleApp,
    },
});
