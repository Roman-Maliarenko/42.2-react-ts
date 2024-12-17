import Button from "components/Button/Button";
import {
  ThirdContainer,
  HeaderContainer,
  LogoContainer,
  MainContainer,
  ButtonContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SecondComponent() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/clients");
  };
  return (
    <ThirdContainer>
      <HeaderContainer>
        <LogoContainer>🥤👉🏼🟠</LogoContainer>Fanta
      </HeaderContainer>
      <MainContainer>
        Almost all of the countries that have Fanta also have the Orange flavor.
        In Cyprus, the Fanta Orange soda is not available, though orange juice
        is marketed under the Fanta name in Cyprus. Fanta Orange is not
        available in the Philippines and Trinidad and Tobago. In Singapore,
        Fanta Orange is only available unofficially through imports. In
        Indonesia, Fanta Orange has a much higher sugar content.
      </MainContainer>
      <ButtonContainer>
        <Button name="Back" onClick={goBackToHome} />
      </ButtonContainer>
    </ThirdContainer>
  );
}

export default SecondComponent;
