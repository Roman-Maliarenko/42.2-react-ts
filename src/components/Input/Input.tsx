import "./styles.ts";
import { InputProps } from './types';
import { ErrorMesage, InputContainer, InputElement, Label } from './styles';


function Input({ name, id, type = 'text', placeholder, label, value, onChange, error, checked }: InputProps) {

function Input({ name, id, type = 'text', placeholder, label, value, onChange, error }: InputProps) {

  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
        checked={checked}
      />
      <ErrorMesage>{error}</ErrorMesage>
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputContainer>
  );
}

export default Input;