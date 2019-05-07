import * as React from "react";

import { CustomTextBoxProps } from "../models";

export class CustomTextBox extends React.Component<CustomTextBoxProps> {
    render(): any {
        return (
            <div className={(this.props.containerClassName || "") + " custom-text-box"}>
                {
                    !this.props.multiline &&
                    <input
                        type="text"
                        onChange={this.props.onChange}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        className={(this.props.className || "") + (this.props.bold ? " bold" : "")}
                    />
                }
                {
                    this.props.multiline &&
                    <textarea
                        onChange={this.props.onChange}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        className={(this.props.className || "") + (this.props.bold ? " bold" : "")}
                    />
                }
            </div>
        );
    }
}
