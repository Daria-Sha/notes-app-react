import React from 'react';
import { EditIcons } from '../types/editIcons';
import { CategoriesIcons } from '../types/categories';

interface IconProps {
  iconName: EditIcons | CategoriesIcons;
}

const Icon: React.FC<IconProps> = ({iconName}) => {
  return (
    <span className='material-icons' style={{fontSize: '2vw'}}>
        {iconName}
    </span>
  );
}

export default Icon;