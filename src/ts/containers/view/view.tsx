import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { ConfirmDialog, CustomTextBox, NotFound, Panel } from "../../components";
import { Note, ViewContainerProps, ViewContainerState } from "../../models";
import { addNote, removeNote, updateNote } from "../../redux/actions";

class ViewContainerClass extends React.Component<ViewContainerProps, ViewContainerState> {

    constructor(props: any) {
        super(props);
        this.state = {
            notFound: false,
            showConfirm: false,
            id: 0,
            description: "",
            title: "",
            createdDate: new Date(),
            lastModifiedDate: new Date()
        };
    }

    componentDidMount(): any {
        const id: number = +this.props.match.params.id;
        if (id) {
            const note: Note = this.getNote(id);
            if (!note) {
                this.setState({ notFound: true });
                return;
            }
            this.setState({
                id: id,
                description: note.description,
                title: note.title,
                createdDate: note.createdDate,
                lastModifiedDate: note.lastModifiedDate
            });
        }
    }

    cancel = () => {
        this.props.history.push("/");
    }

    delete = () => {
        let index: number = this.getIndex();
        this.props.actions.removeNote(index);
        this.props.history.push("/");
    }

    getIndex = (): number => {
        if (!this.props.notes || this.props.notes.length === 0) {
            return -1;
        }
        let current: Note = this.props.notes.filter(x => x.id === this.state.id)[0];
        let index: number = this.props.notes.indexOf(current);
        return index;
    }

    getNewId = (): number => {
        if (!this.props.notes || this.props.notes.length === 0) {
            return 1;
        }
        let max: number = Math.max.apply(null, this.props.notes.map(x => x.id));
        return max + 1;
    }

    getNote = (id: number): Note => {
        let current: Note = this.props.notes.filter(x => x.id === +id)[0];
        return current;
    }

    save = () => {

        const note: Note = {
            createdDate: new Date(),
            lastModifiedDate: new Date(),
            id: +this.state.id,
            title: this.state.title || "Untitled Note",
            description: this.state.description
        };

        if (this.state.id === 0) {
            let id: number = this.getNewId();
            note.id = id;
            this.props.actions.addNote(note);
        } else {
            let index: number = this.getIndex();
            note.createdDate = this.state.createdDate;
            note.lastModifiedDate = new Date();
            this.props.actions.updateNote(note, index);
        }
        this.props.history.push("/");
    }

    valueChange = (event: any, field: string) => {
        let state: ViewContainerState = { ...this.state };
        state[field] = event.target.value;
        this.setState({ ...state });
    }


    render(): any {
        if (this.state.notFound) {
            return <NotFound />;
        }
        return (
            <Panel className="view-panel">
                <CustomTextBox bold
                    className="title-box"
                    containerClassName="title-container"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(event) => this.valueChange(event, "title")}
                />
                <CustomTextBox
                    className="description-box"
                    containerClassName="description-container"
                    multiline={true}
                    placeholder="Write something..."
                    value={this.state.description}
                    onChange={(event) => this.valueChange(event, "description")}
                />
                <div className="buttons-container">
                    <a className="button white-button" onClick={this.cancel}>Cancel</a>
                    <a className="button green-button" onClick={this.save}>Save</a>
                    {this.state.id > 0 && <a className="button red-button" onClick={() => this.setState({ showConfirm: true })}>Delete</a>}
                </div>
                {
                    this.state.showConfirm &&
                    <ConfirmDialog
                        title="Delete Confirmation" message="Are you sure to delete this note?"
                        onNo={() => this.setState({ showConfirm: false })}
                        onYes={this.delete}
                    />
                }
            </Panel>
        );
    }
}

const ViewContainerWithRouter: any = withRouter(ViewContainerClass);

function mapStateToProps(state: any): any {
    return state.NoteReducer;
}

function mapDispatchToProps(dispatch: any): any {
    return {
        actions: bindActionCreators({ addNote, updateNote, removeNote }, dispatch)
    };
}

export const ViewContainer: any = connect(mapStateToProps, mapDispatchToProps)(ViewContainerWithRouter);