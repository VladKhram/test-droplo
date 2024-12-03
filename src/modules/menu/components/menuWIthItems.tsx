'use client';

import { useState } from 'react';
import { MenuItemType } from '../types';
import MenuGroupElements from './menuGroupElements';
import MenuRootItemCreateForm from '../forms/menuItemForm/rootCreate';
import MenuFooter from './menuFooter';

interface MenuWithItemsProps {
  menuItems: MenuItemType[];
}

export default function MenuWithItems({ menuItems }: MenuWithItemsProps) {
  const [isCreateNewItem, setIsCreateNewItem] = useState(false);

  return (
    <div className='w-full rounded-lg overflow-hidden border-border-primary border divide-y'>
      <MenuGroupElements isRootElement={true} children={menuItems} />

      {isCreateNewItem && (
        <MenuRootItemCreateForm onClose={() => setIsCreateNewItem(false)} />
      )}

      <MenuFooter onStartCreation={() => setIsCreateNewItem(true)} />
    </div>
  );
}
