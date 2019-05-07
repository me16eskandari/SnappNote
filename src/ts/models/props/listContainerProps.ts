import { List } from "..";
import { Action } from "../action";

export class ListContainerProps extends List {
    actions: {
        removeNote: (index: number) => Action;
    };
}