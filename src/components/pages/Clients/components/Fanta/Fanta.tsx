import GoBack from "components/GoBack/GoBack";
import {
  FantaContainer,
  FantaTitle,
  Description,
  ButtonWrapper,
} from "./styles";

function Fanta() {
  return (
    <FantaContainer>
      <FantaTitle>Fanta</FantaTitle>
      <Description>
        Introduced in 1940, Fanta is the second largest brand of The Coca‑Cola Company.
      </Description>
      <ButtonWrapper>
        <GoBack />
      </ButtonWrapper>
    </FantaContainer>
  );
}

export default Fanta;
