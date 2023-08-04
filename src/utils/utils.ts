import { CategoriesState } from "../types/categories";
import { Note } from "../types/notes";

export function countStatistics(categories: CategoriesState, activeNotes: [] | Note[], archivedNotes: [] | Note[]): CategoriesState {
    const calculatedCategories = structuredClone(categories);
    for (const note of activeNotes) {
        for (const category in calculatedCategories) {
            if(note.category.name === calculatedCategories[category]['name']) {
                calculatedCategories[category].activeNumber++;
                break;
            }
        }
    }
    for (const note of archivedNotes) {
        for (const category in calculatedCategories) {
            if(note.category.name === calculatedCategories[category]['name']) {
                calculatedCategories[category].archivedNumber++;
                break;
            }
        }
    }
    return calculatedCategories;
}

export function extractDates(string: string): [] | Date[] {
    const datesArr = string.match(/(\d{1,2}[./-]{1}){2}\d{4}/g);
    return datesArr ? datesArr.filter(elem => Date.parse(elem)).map(elem => new Date(elem)) : [];
}