import React from 'react';
import { CategoriesState } from '../types/categories';
import CategoryIconTd from './CategoryIconTd';

interface StatisticsTableProps {
    categories: CategoriesState;
    showArchiveHandler: () => void;
}

const StatisticsTable: React.FC<StatisticsTableProps> = ({categories, showArchiveHandler}) => {
    const categoriesNames = [];
    for (const category in categories) {
        categoriesNames.push(category);
    }
    return (
        <tbody>
            {categoriesNames.map(category =>
                <tr key={category}>
                    <CategoryIconTd categoryIcon={categories[category]['icon']} />
                    <td>{category}</td>
                    <td>{categories[category]['activeNumber']}</td>
                    {categories[category]['archivedNumber']
                        ? <td onClick={showArchiveHandler} className='available-archive'>{categories[category]['archivedNumber']}</td>
                        : <td>{categories[category]['archivedNumber']}</td>
                    }
                </tr>
            )}
        </tbody>
    );
}

export default StatisticsTable;