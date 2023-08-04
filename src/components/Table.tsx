import React from 'react';
import { NotesTypes } from '../types/notes';
import ThEditBlock from './ThEditBlock';

interface TableProps {
    columns: string[];
    notesType?: NotesTypes;
    children: any;
}

const Table: React.FC<TableProps> = ({columns, notesType, children}) => {
  return (
    <table>
        <thead>
            <tr>
                <th className='note-icon'></th>
                {columns.map(column =>
                    <th key={column}>{column}</th>
                )}
                {notesType ? <ThEditBlock notesType={notesType} /> : ''}
            </tr>
        </thead>
        {children}
    </table>
  );
}

export default Table;