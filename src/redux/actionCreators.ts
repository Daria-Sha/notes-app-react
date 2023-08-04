import { Note, NotesActionTypes } from "../types/notes";

export const addNoteAction = (payload: Note) => ({type: NotesActionTypes.ADD_NOTE, payload});
export const editNoteAction = (payload: Note) => ({type: NotesActionTypes.EDIT_NOTE, payload});
export const archiveNoteAction = (payload: Note) => ({type: NotesActionTypes.ARCHIVE_NOTE, payload});
export const unarchiveNoteAction = (payload: Note) => ({type: NotesActionTypes.UNARCHIVE_NOTE, payload});
export const deleteNoteAction = (payload: Note) => ({type: NotesActionTypes.DELETE_NOTE, payload});