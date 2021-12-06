import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers,
    (localStorage['favorite-characters']) ? JSON.parse(localStorage['favorite-characters']) :
        {}
);
store.subscribe(() => {
    localStorage['favorite-characters'] = JSON.stringify(store.getState());
});
export default store;