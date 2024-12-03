'use client';

import { useContext } from 'react';
import { FormControllerWithElement, MenuItemFieldsType } from '../../types';
import MenuItemForm from './default';
import { MenuContext } from '../../menu';
import { getMenuWithUpdatedItem } from '../../functions/store';

export default function MenuItemUpdateForm({
  onClose,
  element,
}: FormControllerWithElement) {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const onUpdate = (data: MenuItemFieldsType) => {
    setMenuItems(getMenuWithUpdatedItem(menuItems, element.id, data));
    onClose();
  };

  return (
    <div className='py-4 pr-6'>
      <MenuItemForm
        onSubmit={onUpdate}
        onClose={onClose}
        defaultValues={element}
      />
    </div>
  );
}
