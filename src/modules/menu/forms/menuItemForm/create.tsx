'use client';

import { useContext } from 'react';
import { FormControllerWithElement, MenuItemFieldsType } from '../../types';
import MenuItemForm from './default';
import { MenuContext } from '../../menu';
import { getMenuWithNewItem } from '../../functions/store';

export default function MenuItemCreateForm({
  onClose,
  element,
}: FormControllerWithElement) {
  const defaultValue = { name: '', link: '' };
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const onAdd = (data: MenuItemFieldsType) => {
    setMenuItems(getMenuWithNewItem(menuItems, data, element.id));
    onClose();
  };

  return (
    <div className='py-5 pr-6'>
      <MenuItemForm
        onSubmit={onAdd}
        onClose={onClose}
        defaultValues={defaultValue}
      />
    </div>
  );
}
