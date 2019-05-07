import * as React from "react";

import { ConfirmDialogProps } from "../models";

export class ConfirmDialog extends React.Component<ConfirmDialogProps> {
    render(): any {
        return (
            <div className="confirm-dialog-overlay">
                <div className="confirm-dialog">
                    <h1 className="title">{this.props.title}</h1>
                    <h3 className="message">{this.props.message}</h3>
                    <div className="button-container">
                        <a className="button white-button" onClick={this.props.onNo}>No</a>
                        <a className="button blue-button" onClick={this.props.onYes}>Yes</a>
                    </div>
                </div>
            </div>
        );
    }
}
