import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { NotesState } from '../types/notes';

export const useTypedSelector: TypedUseSelectorHook<NotesState> = useSelector;