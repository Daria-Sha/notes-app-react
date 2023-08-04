import { CategoriesIcons, CategoriesNames, CategoriesState } from "../types/categories";

export const categoriesInitialState: CategoriesState = {
    [CategoriesNames.TASK]: {
        name: CategoriesNames.TASK,
        icon: CategoriesIcons.TASK,
        activeNumber: 0,
        archivedNumber: 0
    },
    [CategoriesNames.RANDOM_THOUGHT]: {
        name: CategoriesNames.RANDOM_THOUGHT,
        icon: CategoriesIcons.RANDOM_THOUGHT,
        activeNumber: 0,
        archivedNumber: 0
    },
    [CategoriesNames.IDEA]: {
        name: CategoriesNames.IDEA,
        icon: CategoriesIcons.IDEA,
        activeNumber: 0,
        archivedNumber: 0
    }
};