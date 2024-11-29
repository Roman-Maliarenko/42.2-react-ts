import "./style.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormWrapper } from "./style";
import { LoginFormTitle } from "./style";
import { InputsContainer } from "../LoginForm/style";

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          name="email"
          id="user_email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
