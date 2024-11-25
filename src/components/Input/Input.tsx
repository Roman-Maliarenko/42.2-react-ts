import "./style.css";

interface InputProps {
  name:string,
  id:string,
  label:string,
  type?: "password" | "email";
  placeholder: string;
}

function Input({ name, id, type, placeholder, label }:InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  );
}

export default Input;