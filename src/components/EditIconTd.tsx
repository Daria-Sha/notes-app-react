import React from 'react';
import { EditIcons } from '../types/editIcons';
import { Note, handlerNote } from '../types/notes';
import Icon from './Icon';

interface EditIconTdProps {
    editIcon: EditIcons;
    eventHandler: handlerNote;
    note: Note;
}

const EditIconTd: React.FC<EditIconTdProps> = ({editIcon, eventHandler, note}) => {
  return (
    <td className='edit' onClick={() => eventHandler(note)}>
        <Icon iconName={editIcon} />
    </td>
  );
}

export default EditIconTd;