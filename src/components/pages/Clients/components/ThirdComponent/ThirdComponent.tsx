import Button from "components/Button/Button";
import {
  ThirdContainer,
  HeaderContainer,
  LogoContainer,
  MainContainer,
  ButtonContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function ThirdComponent() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/clients");
  };
  return (
    <ThirdContainer>
      <HeaderContainer>
        <LogoContainer>🥤👉🏼🔴</LogoContainer>CocaCola
      </HeaderContainer>
      <MainContainer>
        Coca-Cola is a carbonated soft drink sold in stores, restaurants, and
        vending machines in more than 200 countries. It is produced by The
        Coca-Cola Company of Atlanta, Georgia, and is often referred to simply
        as Coke, a registered trademark of The Coca-Cola Company in the United
        States since March 27, 1944. Originally intended as a patent medicine
        when it was invented in the late 19th century by John Pemberton,
        Coca-Cola was bought out by businessman Asa Griggs Candler, whose
        marketing tactics led Coke to its dominance of the world soft-drink
        market throughout the 20th century.
      </MainContainer>
      <ButtonContainer>
        <Button name="Back" onClick={goBackToHome} />
      </ButtonContainer>
    </ThirdContainer>
  );
}

export default ThirdComponent;
