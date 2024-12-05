
import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({ name, type = "button", onClick, disabled = false}: ButtonProps) {
  return (
    <MainButton className="main-button" type={type} disabled = {disabled} onClick={onClick}>
      {name}
    </MainButton>
  );
}

export default Button;
