import { Category } from "./categories";

export enum NotesTypes {
    ACTIVE_NOTES = 'active-notes',
    ARCHIVED_NOTES = 'archived-notes'
}

export interface Note {
    id: number;
    name: string;
    created: string;
    category: Category;
    content: string;
    dates: [] | Date[];
}

export interface NewNote {
    name: string;
    category: Category;
    content: string;
}

export interface NotesState {
    activeNotes: [] | Note[];
    archivedNotes: [] | Note[];
}

export enum NotesActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    ARCHIVE_NOTE = 'ARCHIVE_NOTE',
    UNARCHIVE_NOTE = 'UNARCHIVE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE'
}

export interface NotesAction {
    type: NotesActionTypes;
    payload: Note;
}

export type handlerNote = (noteItem: Note) => void;

export interface NotesHandlers {
    addNote: (noteItem: NewNote) => void;
    editNote: handlerNote;
    archiveNote: handlerNote;
    unarchiveNote: handlerNote;
    deleteNote: handlerNote;
    showForm: (noteItem?: Note) => void;
    hideForm: () => void;
}