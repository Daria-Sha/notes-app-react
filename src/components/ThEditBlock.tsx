import React from 'react';
import { NotesTypes } from '../types/notes';
import Icon from './Icon';
import { EditIcons } from '../types/editIcons';

interface ThEditBlockProps {
    notesType: NotesTypes;
}

const ThEditBlock: React.FC<ThEditBlockProps> = ({notesType}) => {
  return (
    <>
        <th className='edit-note'>
            {notesType === NotesTypes.ACTIVE_NOTES ? <Icon iconName={EditIcons.EDIT} /> : ''}
        </th>
        <th className='edit-note'>
            {notesType === NotesTypes.ACTIVE_NOTES
                ? <Icon iconName={EditIcons.ARCHIVE} />
                : <Icon iconName={EditIcons.UNARCHIVE} />
            }
        </th>
        <th className='edit-note'><Icon iconName={EditIcons.DELETE} /></th>
    </>
  );
}

export default ThEditBlock;