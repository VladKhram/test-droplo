'use client';

import { useContext, useState } from 'react';
import { MenuItemType } from '../types';
import MenuGroupElements from './menuGroupElements';
import MenuItemInformation from './menuItemInformation';
import { MenuContext } from '../menu';
import { getMenuWithoutItemById } from '../functions/store';
import MenuItemCreateForm from '../forms/menuItemForm/create';
import MenuItemUpdateForm from '../forms/menuItemForm/update';

interface MenuItemProps {
  element: MenuItemType;
  isBorderBottom: boolean;
  isBorderTop: boolean;
  isBorderLeft: boolean;
  isBorderRounded: boolean;
}

export default function MenuItem({
  element,
  isBorderTop,
  isBorderBottom,
  isBorderLeft,
  isBorderRounded,
}: MenuItemProps) {
  const [isCreate, setIsCreate] = useState(false);
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [isEdit, setIsEdit] = useState(false);

  const onRemoveThis = () => {
    setMenuItems(getMenuWithoutItemById(menuItems, element.id));
  };

  return (
    <div>
      <MenuItemInformation
        {...element}
        isBorderBottom={isBorderBottom}
        isBorderTop={isBorderTop}
        isBorderLeft={isBorderLeft}
        isBorderRounded={isBorderRounded}
        onCreateChild={() => setIsCreate(true)}
        onUpdateThis={() => setIsEdit(true)}
        onDeleteThis={onRemoveThis}
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
