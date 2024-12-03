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
  element: MenuItemFieldsType | MenuItemType,
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

export const getElementById = (
  menuItems: MenuItemType[],
  id: string
): MenuItemType | void => {
  for (let i = 0; i < menuItems.length; i++) {
    const element = menuItems[i];

    if (element.id === id) {
      return element;
    }

    if (element.children) {
      const elementFromChild = getElementById(element.children, id);

      if (elementFromChild) {
        return elementFromChild;
      }
    }
  }
};

export const getMenuAfterDnD = (
  menuItems: MenuItemType[],
  idStart: string,
  idEnd: string
) => {
  const element = getElementById(menuItems, idStart);

  if (element) {
    if (element.children) {
      if (getElementById(element.children, idEnd)) {
        return menuItems;
      }
    }

    const menuWithoutTheElement = getMenuWithoutItemById(menuItems, idStart);
    return getMenuWithNewItem(menuWithoutTheElement, element, idEnd);
  } else {
    return menuItems;
  }
};
