import React, {useRef} from 'react';
import { CategoriesState } from '../types/categories';
import { NewNote, Note, NotesHandlers } from '../types/notes';

function checkData(element: HTMLInputElement | HTMLTextAreaElement, reg: RegExp) {
    if(!element.value.match(reg)) {
        element.classList.add('error');
        element.addEventListener('input', removeError);
        throw new Error('Invalid input');
    }
}

function removeError(event: any) {
    event.currentTarget.classList.remove('error');
    event.currentTarget.removeEventListener('input', removeError);
}

interface FormProps {
    categories: CategoriesState;
    notesHandlers: NotesHandlers;
    note?: Note;
}

const Form: React.FC<FormProps> = ({categories, notesHandlers, note}) => {
    function getValues(): never | NewNote {
        checkData(nameRef.current!, /^.{1,30}$/);
        const name = nameRef.current!.value;
        const category = categories[categoryRef.current!.value];
        checkData(contentRef.current!, /^.{2,}$/);
        const content = contentRef.current!.value;
        return {name, category, content};
    }

    const categoriesNames = [];
    for (const category in categories) {
        categoriesNames.push(category);
    }
    const {addNote, editNote, hideForm} = notesHandlers;
    const nameRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    return (
        <form className='note'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameRef} defaultValue={note ? note.name : ''} />
            <label htmlFor='category'>Category</label>
            <select id='category' ref={categoryRef} defaultValue={note ? note.category.name : categoriesNames[0]}>
                {categoriesNames.map(category => <option value={category} key={category}>{category}</option>)}
            </select>
            <label htmlFor='content'>Content</label>
            <textarea id='content' ref={contentRef} defaultValue={note ? note.content : ''}></textarea>
            <button type='button' id='change-note' onClick={() => {
                try {
                    if(note) {
                        editNote({...note, ...getValues()});
                    } else {
                        addNote({...getValues()});
                    }
                    hideForm();
                } catch(err) {}
            }}>{note ? 'Save changes' : 'Add note'}</button>
        </form>
    );
}

export default Form;