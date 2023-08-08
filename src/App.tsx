import React, { useState } from 'react';
import './styles/App.css';
import NotesTbody from './components/NotesTbody';
import { Note, NotesHandlers, NotesTypes } from './types/notes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { countStatistics, extractDates } from './utils/utils';
import { useDispatch } from 'react-redux';
import Form from './components/Form';
import StatisticsTbody from './components/StatisticsTbody';
import { categoriesInitialState } from './redux/categoriesInitialState';
import { addNoteAction, editNoteAction, archiveNoteAction, unarchiveNoteAction, deleteNoteAction } from './redux/actionCreators';
import Table from './components/Table';

function App() {
  const dispatch = useDispatch();

  const notes: [] | Note[] = useTypedSelector(state => state.notes);
  const activeNotes = notes.filter(note => note.active);
  const archivedNotes = notes.filter(note => !note.active);

  const categories = countStatistics(categoriesInitialState, notes);

  const [showEditing, setShowEditing] = useState<boolean>(false);
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);
  const [showArchive, setShowArchive] = useState<boolean>(false);

  const notesColumns = ['Name', 'Created', 'Category', 'Content', 'Dates'];
  const statisticsColumns = ['Note Category', 'Active', 'Archived'];

  const notesHandlers: NotesHandlers = {
    addNote: (newNote) => {
      let lastNoteId = 0;
      notes.forEach(note => {
        lastNoteId = note.id > lastNoteId ? note.id : lastNoteId;
      });
      const note: Note = {
        ...newNote,
        id: lastNoteId + 1,
        created: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        dates: extractDates(newNote.content),
        active: true
      };
      dispatch(addNoteAction(note));
    },
    editNote: (note) => {
      const editedNote: Note = {
        ...note,
        dates: extractDates(note.content)
      };
      dispatch(editNoteAction(editedNote));
    },
    archiveNote: (note) => {
      dispatch(archiveNoteAction(note));
      if(note === currentNote) {
        notesHandlers.hideForm();
      }
    },
    unarchiveNote: (note) => dispatch(unarchiveNoteAction(note)),
    deleteNote: (note) => {
      dispatch(deleteNoteAction(note));
      if(note === currentNote) {
        notesHandlers.hideForm();
      }
    },
    showForm: (note) => {
      setShowEditing(true);
      if(!currentNote) {
        setCurrentNote(note);
      }
    },
    hideForm: () => {
      setShowEditing(false);
      setCurrentNote(undefined);
    }
  };

  return (
    <div className='notes'>
      {activeNotes.length
        ? <Table columns={notesColumns} notesType={NotesTypes.ACTIVE_NOTES}>
            <NotesTbody notes={activeNotes} notesType={NotesTypes.ACTIVE_NOTES} notesHandlers={notesHandlers} />
          </Table>
        : ''
      }
      {showEditing ? '' : <button type="button" id="create-note" onClick={() => notesHandlers.showForm()}>Create Note</button>}
      {showEditing ? <Form categories={categories} notesHandlers={notesHandlers} note={currentNote} /> : ''}
      <Table columns={statisticsColumns}>
        <StatisticsTbody categories={categories} showArchiveHandler={() => {setShowArchive(true)}} />
      </Table>
      {showArchive && archivedNotes.length
        ? <Table columns={notesColumns} notesType={NotesTypes.ARCHIVED_NOTES}>
            <NotesTbody notes={archivedNotes} notesType={NotesTypes.ARCHIVED_NOTES} notesHandlers={notesHandlers} />
          </Table>
        : ''
      }
    </div>
  );
}

export default App;
