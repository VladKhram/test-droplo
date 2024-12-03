'use client';

import { useContext, useState } from 'react';
import { MenuItemInfoStyle, MenuItemType } from '../types';
import MenuGroupElements from './menuGroupElements';
import MenuItemInformation from './menuItemInformation';
import { MenuContext } from '../menu';
import { getMenuWithoutItemById } from '../functions/store';
import MenuItemCreateForm from '../forms/menuItemForm/create';
import MenuItemUpdateForm from '../forms/menuItemForm/update';
import ItemSortable from './ItemDraggable';

interface MenuItemProps extends MenuItemInfoStyle {
  element: MenuItemType;
}

export default function MenuItem({ element, ...itemStyle }: MenuItemProps) {
  const [isCreate, setIsCreate] = useState(false);
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleRemoveThis = () => {
    setMenuItems(getMenuWithoutItemById(menuItems, element.id));
  };

  return (
    <div>
      <MenuItemInformation
        {...itemStyle}
        element={element}
        onCreateChild={() => setIsCreate(true)}
        onUpdateThis={() => setIsEdit(true)}
        onDeleteThis={handleRemoveThis}
      />
      <div className='pl-16 bg-background-secondary'>
        {isEdit && (
          <MenuItemUpdateForm
            onClose={() => setIsEdit(false)}
            element={element}
          />
        )}

        {element.children && <MenuGroupElements children={element.children} />}

        {isCreate && (
          <MenuItemCreateForm
            element={element}
            onClose={() => setIsCreate(false)}
          />
        )}
      </div>
    </div>
  );
}
