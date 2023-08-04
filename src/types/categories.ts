export enum CategoriesNames {
    TASK = 'Task',
    RANDOM_THOUGHT = 'Random Thought',
    IDEA = 'Idea'
}

export enum CategoriesIcons {
    TASK = 'shopping_cart',
    RANDOM_THOUGHT = 'psychology',
    IDEA = 'light_mode'
}

export interface Category {
    name: CategoriesNames;
    icon: CategoriesIcons;
    activeNumber: number;
    archivedNumber: number;
}

export interface CategoriesState {
    [index: string]: Category;
}