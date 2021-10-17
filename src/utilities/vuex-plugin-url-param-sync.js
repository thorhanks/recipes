/*
    WHAT IS THIS ?
        Vuex plugin to keep the page's url query parameters in sync with the store.
    HOW DOES IT WORK ?
        It injects a new store module called "urlParameters" that contains all the url
        parameter values you have specified. Includes a mutation that you can call from
        anywhere to update the url parameter values.
    HOW DO I SET IT UP / INSTALL IT ?
        import createUrlParamSyncPlugin from "@mediarails/vuex-plugin-url-param-sync";
        ...
        const urlParamSyncPlugin = createUrlParamSyncPlugin([
            {
                key: "myvalue",   // What you want the url parameter to be called
                default: 42,      // The default value of the url parameter
                history: true,   // When value is updated should it support back button (default: true)
            },
        ]);
        ...
        const store = new Vuex.Store({
            ...
            plugins: [urlParamSyncPlugin],
            ...
        });
    ACCESS URL PARAMETER VALUES ANYWERE IN YOUR VUE COMPONENTS
        computed: mapState({
            selectedTabId: s => s.urlParameters.tab,
        }),
*/

import queryString from "query-string";
const setUrlParameterValueMutation = "PLUGIN-URL-PARAM-SYNC__SET-PARAM-VALUE";

export { setUrlParameterValueMutation, createUrlParamSyncPlugin };

export default function createUrlParamSyncPlugin(urlParameters = []) {
    return (store) => {
        var urlValues = queryString.parse(window.location.search);
        var paramState = getModuleState(urlParameters, urlValues);

        store.registerModule("urlParameters", {
            state: paramState,
            mutations: {
                [setUrlParameterValueMutation](state, { key, value, sync }) {
                    state[key] = value;
                    let paramSettings = urlParameters.find(
                        (x) => x.key === key
                    );
                    if (paramSettings && sync !== false) {
                        syncValueToUrl(key, value, paramSettings.history);
                    }
                },
            },
        });

        window.addEventListener("popstate", () => {
            let urlValues = queryString.parse(window.location.search);
            Object.keys(urlValues).forEach((k) => {
                store.commit(setUrlParameterValueMutation, {
                    key: k,
                    value: urlValues[k],
                    sync: false,
                });
            });
        });

        // After loading above set the current url to have all parameters and their default or set value
        Object.keys(paramState).forEach((k) => {
            syncValueToUrl(k, paramState[k], false);
        });
    };
}

function getModuleState(urlParameters, urlValues = {}) {
    let state = {};

    for (let parameter of urlParameters) {
        let key = parameter.key;
        let value = Object.keys(urlValues).includes(key)
            ? urlValues[key]
            : parameter.default;
        state[key] = value;
    }

    return state;
}

function syncValueToUrl(key, value, history = true) {
    const baseUrl = window.location.href.replace(window.location.search, "");
    let currentQueryString = queryString.stringify(
        queryString.parse(window.location.search)
    );

    let queryValues = queryString.parse(window.location.search);
    queryValues[key] = value;
    let newQueryString = queryString.stringify(queryValues);

    if (currentQueryString != newQueryString) {
        if (history) {
            window.history.pushState({}, "", `${baseUrl}?${newQueryString}`);
        } else {
            window.history.replaceState({}, "", `${baseUrl}?${newQueryString}`);
        }
    }
}
