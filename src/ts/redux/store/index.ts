import { createStore } from "redux";

import { StorageService } from "../../services";
import rootReducer from "../reducers";

export default function configureStore(): any {

    const persistedState: any = StorageService.loadState();

    const store: any = createStore(
        rootReducer,
        persistedState
    );

    store.subscribe(() => {
        StorageService.saveState({ ...store.getState() });
    });

    return store;
}
