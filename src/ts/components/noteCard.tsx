import * as React from "react";
import { Link } from "react-router-dom";

import { ConfirmDialog } from ".";
import { NoteCardProps } from "../models";

export class NoteCard extends React.Component<NoteCardProps, any> {
    DATE_OPTIONS = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

    constructor(props: NoteCardProps) {
        super(props);
        this.state = {
            fadeout: false,
            showConfirm: false,
        };
    }

    remove = (event: any) => {
        event.preventDefault();
        this.setState({ showConfirm: true });
    }

    delete = () => {
        this.setState({ fadeout: true, showConfirm: false }, () => setTimeout(() => {
            this.setState({ fadeout: false });
            this.props.onRemoveClick();
        }, 500));
    }

    render(): any {
        return (
            <React.Fragment>
                <Link className={(this.state.fadeout ? "fadeout" : "") + " note-card"} to={"/view/" + this.props.id}>
                    <h1 className="title">
                        {this.props.title}
                        <span className="remove-button" onClick={this.remove}>×</span>
                    </h1>
                    <p className="description">{this.props.description}</p>
                    <time className="time">{(new Date(this.props.lastModifiedDate)).toLocaleDateString("en-US", this.DATE_OPTIONS)}</time>
                </Link>
                {
                    this.state.showConfirm &&
                    <ConfirmDialog
                        title="Delete Confirmation" message="Are you sure to delete this note?"
                        onNo={() => this.setState({ showConfirm: false })}
                        onYes={this.delete}
                    />
                }
            </React.Fragment>
        );
    }
}
