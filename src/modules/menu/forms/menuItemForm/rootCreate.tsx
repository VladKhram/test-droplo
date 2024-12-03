'use client';

import { useContext } from 'react';
import { FormController, MenuItemFieldsType } from '../../types';
import MenuItemForm from './default';
import { MenuContext } from '../../menu';
import { getMenuWithNewItem } from '../../functions/store';

interface MenuRootItemCreateFormProps extends FormController {
  isMenuEmpty?: boolean;
}

export default function MenuRootItemCreateForm({
  onClose,
  isMenuEmpty = false,
}: MenuRootItemCreateFormProps) {
  const defaultValue = { name: '', link: '' };
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const handleAdd = (data: MenuItemFieldsType) => {
    setMenuItems(getMenuWithNewItem(menuItems, data));
    onClose();
  };

  return (
    <div className={isMenuEmpty ? '' : 'py-4 px-6'}>
      <MenuItemForm
        onSubmit={handleAdd}
        onClose={onClose}
        defaultValues={defaultValue}
      />
    </div>
  );
}
