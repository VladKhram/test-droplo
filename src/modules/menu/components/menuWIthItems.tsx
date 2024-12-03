'use client';

import { useContext, useState } from 'react';
import { MenuItemType } from '../types';
import MenuGroupElements from './menuGroupElements';
import MenuRootItemCreateForm from '../forms/menuItemForm/rootCreate';
import MenuFooter from './menuFooter';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core';
import { MenuContext } from '../menu';
import { getMenuAfterDnD } from '../functions/store';

interface MenuWithItemsProps {
  menuItems: MenuItemType[];
}

export default function MenuWithItems({ menuItems }: MenuWithItemsProps) {
  const [isCreateNewItem, setIsCreateNewItem] = useState(false);
  const { setMenuItems } = useContext(MenuContext);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setMenuItems(
        getMenuAfterDnD(menuItems, active.id.toString(), over.id.toString())
      );
    }
  }

  return (
    <div className='w-full rounded-lg overflow-hidden border-border-primary border divide-y'>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <MenuGroupElements isRootElement={true} children={menuItems} />
      </DndContext>

      {isCreateNewItem && (
        <MenuRootItemCreateForm onClose={() => setIsCreateNewItem(false)} />
      )}

      <MenuFooter onStartCreation={() => setIsCreateNewItem(true)} />
    </div>
  );
}
