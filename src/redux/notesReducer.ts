import { CategoriesNames } from '../types/categories';
import { NotesAction, NotesActionTypes, NotesState } from '../types/notes';
import { categoriesInitialState } from './categoriesInitialState';

const initialState: NotesState = {
    activeNotes: [
        {
            id: 1,
            name: 'Food',
            created: 'June 14, 2023',
            category: categoriesInitialState[CategoriesNames.TASK],
            content: 'Visit a grocery store',
            dates: []
        },
        {
            id: 2,
            name: 'Health',
            created: 'June 23, 2023',
            category: categoriesInitialState[CategoriesNames.TASK],
            content: 'Drink more water',
            dates: []
        },
        {
            id: 3,
            name: 'Mood',
            created: 'June 25, 2023',
            category: categoriesInitialState[CategoriesNames.IDEA],
            content: 'Start attending painting or clay modeling classes',
            dates: []
        },
        {
            id: 4,
            name: 'New book',
            created: 'June 25, 2023',
            category: categoriesInitialState[CategoriesNames.RANDOM_THOUGHT],
            content: 'Ask Ann about the title of this new book',
            dates: []
        },
        {
            id: 5,
            name: 'Self-care',
            created: 'June 27, 2023',
            category: categoriesInitialState[CategoriesNames.TASK],
            content: 'Visit cosmetologist on the 8/3/2023',
            dates: [new Date('8/3/2023')]
        },
        {
            id: 6,
            name: 'Shopping',
            created: 'June 28, 2023',
            category: categoriesInitialState[CategoriesNames.RANDOM_THOUGHT],
            content: 'Buy a new t-shirt',
            dates: []
        },
        {
            id: 7,
            name: 'Health',
            created: 'June 30, 2023',
            category: categoriesInitialState[CategoriesNames.TASK],
            content: 'New bakery makes these pies on Fridays',
            dates: []
        }
    ],
    archivedNotes: []
};

export const notesReducer = (state = initialState, action: NotesAction): NotesState => {
    switch (action.type) {
        case NotesActionTypes.ADD_NOTE:
            return {...state,
                activeNotes: [...state.activeNotes, action.payload]
            };
        case NotesActionTypes.EDIT_NOTE:
            return {...state,
                activeNotes: [...state.activeNotes.filter(elem => elem.id !== action.payload.id), action.payload]
            };
        case NotesActionTypes.ARCHIVE_NOTE:
            return {...state,
                activeNotes: state.activeNotes.filter(elem => elem.id !== action.payload.id),
                archivedNotes: [...state.archivedNotes, action.payload]
            };
        case NotesActionTypes.UNARCHIVE_NOTE:
            return {...state,
                activeNotes: [...state.activeNotes, action.payload],
                archivedNotes: state.archivedNotes.filter(elem => elem.id !== action.payload.id)
            };
        case NotesActionTypes.DELETE_NOTE:
            return {...state,
                activeNotes: state.activeNotes.filter(elem => elem.id !== action.payload.id),
                archivedNotes: state.archivedNotes.filter(elem => elem.id !== action.payload.id)
            };
        default:
            return state;
    }
};