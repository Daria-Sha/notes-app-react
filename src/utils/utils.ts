import { CategoriesState } from "../types/categories";
import { Note } from "../types/notes";

export function countStatistics(categories: CategoriesState, notes: [] | Note[]): CategoriesState {
    const calculatedCategories = structuredClone(categories);
    notes.forEach(note => {
        note.active
            ? calculatedCategories[note.category.name]['activeNumber']++
            : calculatedCategories[note.category.name]['archivedNumber']++;
    });
    return calculatedCategories;
}

export function extractDates(string: string): [] | Date[] {
    const datesArr = string.match(/(\d{1,2}[./-]{1}){2}\d{4}/g);
    return datesArr ? datesArr.filter(elem => Date.parse(elem)).map(elem => new Date(elem)) : [];
}