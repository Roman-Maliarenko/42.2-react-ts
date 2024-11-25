import "./style.css";

function Input({
  inputEmail = "Enter your email",
  inputPassword = "Enter your password",
}) {
  return (
    <div>
      <p className="data-container">Email</p>
      <input
        type="email"
        placeholder={inputEmail}
        className="input-container"
      />
      <p className="data-container">Password</p>
      <input
        type="password"
        placeholder={inputPassword}
        className="input-container"
      />
    </div>
  );
}

export default Input;
