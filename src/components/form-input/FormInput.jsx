import {
  FormInputLabel,
  FormInputComponent,
  Group,
} from './form-input.component';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputComponent {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
