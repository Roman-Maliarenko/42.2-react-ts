import Button from "components/Button/Button";
import {
  ThirdContainer,
  HeaderContainer,
  LogoContainer,
  MainContainer,
  ButtonContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function FirstComponent() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/clients");
  };

  return (
    <ThirdContainer>
      <HeaderContainer>
        <LogoContainer>🥤👉🏼🟢</LogoContainer>Sprite
      </HeaderContainer>
      <MainContainer>
        Sprite is sold in a transparent green bottle, or green aluminum bottle
        or can. Sprite bottles and cans always have dots in between the label
        and the bottom of the bottle or can, except for aluminum bottles.
        Notably, these do not contain labels as well.
      </MainContainer>
      <ButtonContainer>
        <Button name="Back" onClick={goBackToHome} />
      </ButtonContainer>
    </ThirdContainer>
  );
}

export default FirstComponent;
