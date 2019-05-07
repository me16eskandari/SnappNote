import { Note } from "../note";

export class NoteCardProps extends Note {
    onRemoveClick: () => void;
}