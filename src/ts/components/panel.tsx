import * as React from "react";

import { PanelProps } from "../models";

export class Panel extends React.Component<PanelProps, any> {
    render(): any {
        return (
            <div className={(this.props.className || "") + " panel"}>
                {this.props.children}
            </div>
        );
    }
}
