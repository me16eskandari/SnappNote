import { ReduxAction } from "../../constants";
import { Action, Note } from "../../models";

export function addNote(note: Note): Action {
    return {
        type: ReduxAction.INSERT_NOTE,
        payload: note,
    };
}

export function removeNote(index: number): Action {
    return {
        type: ReduxAction.REMOVE_NOTE,
        payload: index,
    };
}

export function updateNote(note: Note, index: number): Action {
    return {
        type: ReduxAction.UPDATE_NOTE,
        payload: { index, note },
    };
}

export function updateList(notes: Note[]): Action {
    return {
        type: ReduxAction.UPDATE_LIST,
        payload: notes
    };
}