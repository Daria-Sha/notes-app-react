import React from 'react';
import { EditIcons } from '../types/editIcons';
import { Note, NotesHandlers, NotesTypes } from '../types/notes';
import CategoryIconTd from './CategoryIconTd';
import EditIconTd from './EditIconTd';

interface NotesTableProps {
    notes: Note[];
    notesType: NotesTypes;
    notesHandlers: NotesHandlers;
}

const NotesTable:React.FC<NotesTableProps> = ({notes, notesType, notesHandlers}) => {
    const { showForm, archiveNote, unarchiveNote, deleteNote } = notesHandlers;
    return (
        <tbody>
            {notes.map(note =>
                <tr key={note.id}>
                    <CategoryIconTd categoryIcon={note.category.icon} />
                    <td>{note.name}</td>
                    <td>{note.created}</td>
                    <td>{note.category.name}</td>
                    <td>
                        <div className='note-content'>{note.content}</div>
                    </td>
                    <td>{note.dates.map(elem => elem.toLocaleDateString('en-US')).join(', ')}</td>
                    {notesType === NotesTypes.ACTIVE_NOTES
                        ? <EditIconTd editIcon={EditIcons.EDIT} eventHandler={showForm} note={note} />
                        : <td></td>
                    }
                    {notesType === NotesTypes.ACTIVE_NOTES
                        ? <EditIconTd editIcon={EditIcons.ARCHIVE} eventHandler={archiveNote} note={note} />
                        : <EditIconTd editIcon={EditIcons.UNARCHIVE} eventHandler={unarchiveNote} note={note} />
                    }
                    <EditIconTd editIcon={EditIcons.DELETE} eventHandler={deleteNote} note={note} />
                </tr>
            )}
        </tbody>
    );
}

export default NotesTable;