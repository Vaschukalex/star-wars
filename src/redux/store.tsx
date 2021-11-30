import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers, 
    (localStorage['favorite-characters']) ? JSON.parse(localStorage['favorite-characters']):
    {},
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
store.subscribe(() =>{
 localStorage['favorite-characters'] = JSON.stringify(store.getState());
});
export default store;