import { initialStore, ReduxAction } from "../../constants";
import { Action, List } from "../../models";

export const NoteReducer: any = (state: List = initialStore, action: Action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case ReduxAction.INSERT_NOTE:
            return { ...state, notes: [action.payload, ...state.notes] };
        case ReduxAction.REMOVE_NOTE:
            return { ...state, notes: [...state.notes.slice(0, action.payload), ...state.notes.slice(action.payload + 1)] };
        case ReduxAction.UPDATE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.slice(0, action.payload.index),
                    action.payload.note,
                    ...state.notes.slice(action.payload.index + 1),
                ]
            };
        case ReduxAction.UPDATE_LIST:
            return { ...state, note: [...action.payload] };
    }
    return state;
};