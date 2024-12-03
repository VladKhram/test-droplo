export type MenuItemFieldsType = {
  name: string;
  link?: string;
};

export interface MenuItemType extends MenuItemFieldsType {
  id: string;
  children?: MenuItemType[];
}

export type FormController = {
  onClose: () => void;
  defaultValue?: MenuItemFieldsType;
};

export interface FormControllerWithElement extends FormController {
  element: MenuItemType;
}

export type ElementHierarchy = {
  isRootElement?: boolean;
};
