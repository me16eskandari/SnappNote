import * as React from "react";
import { NavLink } from "react-router-dom";

import { Panel } from "./panel";

export class NotFound extends React.Component {
    render(): any {
        return (
            <Panel className="not-found">
                <h1>Sorry, this page isn't available.</h1>
                <h3>
                    The link you followed may be broken, or the page may have been removed. <NavLink to="/">Go back to home page</NavLink>
                </h3>
            </Panel>
        );
    }
}
