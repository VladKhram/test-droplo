import { MenuItemFieldsType, MenuItemType } from '../types';

const adjustItemForDB = (element: MenuItemFieldsType) => ({
  id: Date.now().toString(),
  ...element,
});

const getParentItemWithNewChild = (
  parent: MenuItemType,
  newChild: MenuItemFieldsType
) => ({
  ...parent,
  children: parent.children
    ? getMenuWithNewItem(parent.children, newChild)
    : [adjustItemForDB(newChild)],
});

export const getMenuWithNewItem = (
  menuItems: MenuItemType[],
  element: MenuItemFieldsType,
  parentId?: string
) => {
  if (!parentId) {
    return [...menuItems, adjustItemForDB(element)];
  }

  return menuItems.map((el): MenuItemType => {
    if (el.id === parentId) {
      return getParentItemWithNewChild(el, element);
    }

    if (el.children) {
      return {
        ...el,
        children: getMenuWithNewItem(el.children, element, parentId),
      };
    }

    return el;
  });
};

export const getMenuWithoutItemById = (
  menuItems: MenuItemType[],
  id: string
) => {
  let newMenu: MenuItemType[] = [];

  menuItems.forEach((el) => {
    if (el.id !== id) {
      if (!el.children) {
        newMenu.push(el);
      } else {
        newMenu.push({
          ...el,
          children: getMenuWithoutItemById(el.children, id),
        });
      }
    }
  });

  return newMenu;
};

export const getMenuWithUpdatedItem = (
  menuItems: MenuItemType[],
  id: string,
  newData: MenuItemFieldsType
) => {
  return menuItems.map((el): MenuItemType => {
    if (el.id === id) {
      return { ...el, ...newData };
    }

    if (el.children) {
      return {
        ...el,
        children: getMenuWithUpdatedItem(el.children, id, newData),
      };
    }

    return el;
  });
};
