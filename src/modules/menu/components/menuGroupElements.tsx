'use client';

import { ElementHierarchy, MenuItemType } from '../types';
import MenuItem from './menuItem';

const isLastElementWithoutChild = (
  element: MenuItemType,
  index: number,
  array: MenuItemType[]
) => index === array.length - 1 && !element.children;

const isElementAfterPreviousChildren = (index: number, array: MenuItemType[]) =>
  !!(index > 0 && array[index - 1].children);

interface MenuGroupElementsProps extends ElementHierarchy {
  children: MenuItemType[];
}

export default function MenuGroupElements({
  children,
  isRootElement,
}: MenuGroupElementsProps) {
  return (
    <div>
      {children.map((element, i, array) => (
        <MenuItem
          key={element.id}
          element={element}
          isBorderTop={isElementAfterPreviousChildren(i, array)}
          isBorderBottom={!isLastElementWithoutChild(element, i, array)}
          isBorderLeft={!isRootElement}
          isBorderRounded={
            !isRootElement &&
            (isLastElementWithoutChild(element, i, array) || !!element.children)
          }
        />
      ))}
    </div>
  );
}
