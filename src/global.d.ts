export type CategoryType = {
  color: string;
  isChecked: boolean;
  icon: string;
  id: string;
  title: string;
};

export type ButtonType = {
  text: string;
  theme: string;
  clickHandler?: () => void;
  disabled?: boolean;
};
