import React from 'react';
import { CategoriesIcons } from '../types/categories';
import Icon from './Icon';

interface CategoryIconTdProps {
  categoryIcon: CategoriesIcons;
}

const CategoryIconTd: React.FC<CategoryIconTdProps> = ({categoryIcon}) => {
  return (
    <td>
        <div className='circle'>
            <Icon iconName={categoryIcon} />
        </div>
    </td>
  );
}

export default CategoryIconTd;