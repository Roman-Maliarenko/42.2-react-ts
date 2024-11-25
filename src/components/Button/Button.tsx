import "./style.css";

interface ButtonProps {
  onClick? (): void;
  name: string;
  type?: "button" | "submit" | "reset";
}

function Button({ onClick, name, type = "button" }: ButtonProps) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
