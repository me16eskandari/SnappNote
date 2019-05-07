import { Action, List, Note } from "..";

export class ViewContainerProps extends List {
    history: any;
    match: any;
    actions: {
        addNote: (note: Note) => Action;
        updateNote: (note: Note, index: number) => Action;
        removeNote: (index: number) => Action;
    };
}