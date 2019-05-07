import { createBrowserHistory } from "history";
import * as React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";

import { ListContainer, ViewContainer } from ".";
import { NotFound } from "../components";


const history: any = createBrowserHistory();

export class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): any {
        return (
            <React.Fragment>
                <Router history={history}>
                    <header>
                        <Link className="home-link" to="/">Note Management</Link>
                    </header>
                    <section className="body">
                        <Switch>
                            <Route exact path="/" component={ListContainer} />
                            <Route exact path="/add" component={ViewContainer} />
                            <Route exact path="/view/:id" component={ViewContainer} />
                            <Route component={NotFound} />
                        </Switch>
                    </section>
                </Router>
            </React.Fragment>
        );
    }
}
