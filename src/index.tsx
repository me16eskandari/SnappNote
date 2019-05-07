import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./ts/containers";
import configureStore from "./ts/redux/store";

const store: any = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);