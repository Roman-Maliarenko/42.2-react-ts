import "./style.css";
import { InputProps } from "./types";
import { InputContainer } from "./style";
import { LabelContainer } from "./style";
import { InputElement } from "./style";

function Input({ name, id, type = "text", placeholder, label }: InputProps) {
  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <LabelContainer htmlFor={id}>{label}</LabelContainer>}
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
