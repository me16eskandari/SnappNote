import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { CustomTextBox, NoteCard } from "../../components";
import { ListContainerProps, Note } from "../../models";
import { removeNote } from "../../redux/actions";

export class ListContainerClass extends React.Component<ListContainerProps, any> {
    constructor(props: any) {
        super(props);
        this.state = { q: "" };
    }

    deleteNote = (index: number) => {
        this.props.actions.removeNote(index);
    }

    search = (event: any) => {
        this.setState({ q: event.target.value });
    }

    render(): any {
        return (
            <React.Fragment>
                <div className="search-box">
                    <CustomTextBox placeholder="Search..." value={this.state.search} onChange={this.search} />
                </div>
                <div className="list-container">
                    {
                        this.props.notes.map((x: Note, index: number) => {
                            return (
                                (x.title.toLowerCase().includes(this.state.q.toLowerCase()) ||
                                    x.description.toLowerCase().includes(this.state.q.toLowerCase())) &&
                                <NoteCard {...x} key={index} onRemoveClick={() => this.deleteNote(index)} />
                            );
                        })
                    }
                </div>
                <Link to="/add" className="button blue-button floating-button">+</Link>
            </React.Fragment>
        );
    }
}

const ListContainerWithRouter: any = withRouter(ListContainerClass);

function mapStateToProps(state: any): any {
    return state.NoteReducer;
}

function mapDispatchToProps(dispatch: any): any {
    return {
        actions: bindActionCreators({ removeNote }, dispatch)
    };
}

export const ListContainer: any = connect(mapStateToProps, mapDispatchToProps)(ListContainerWithRouter);