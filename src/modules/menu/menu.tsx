'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { MenuItemType } from './types';
import MenuWithItems from './components/menuWIthItems';
import MenuDefault from './components/menuDefault';
import MenuRootItemCreateForm from './forms/menuItemForm/rootCreate';

type MenuContextType = {
  menuItems: MenuItemType[];
  setMenuItems: Dispatch<SetStateAction<MenuItemType[]>>;
};

export const MenuContext = createContext({} as MenuContextType);

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [isAddFirstItem, setIsAddFirstItem] = useState(false);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {menuItems.length === 0 ? (
        isAddFirstItem ? (
          <MenuRootItemCreateForm
            isMenuEmpty={true}
            onClose={() => setIsAddFirstItem(false)}
          />
        ) : (
          <MenuDefault onStartAddFirstItem={() => setIsAddFirstItem(true)} />
        )
      ) : (
        <MenuWithItems menuItems={menuItems} />
      )}
    </MenuContext.Provider>
  );
}
