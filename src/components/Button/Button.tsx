import "./style.css";
import { ButtonProps } from "./types";

function Button({ name, type = "button", onClick }: ButtonProps) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
