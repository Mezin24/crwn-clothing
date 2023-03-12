import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
} from './button.component';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherPorps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherPorps}>{children}</CustomButton>;
};
export default Button;
