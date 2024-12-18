import GoBack from "components/GoBack/GoBack";
import { ColaContainer, ColaTitle, Description, ButtonWrapper } from "./styles";

function Cola() {
  return (
    <ColaContainer>
      <ColaTitle>CocaCola🥤</ColaTitle>
      <Description>
        A carbonated soft drink produced by The Coca-ColaCompany.
      </Description>
      <ButtonWrapper>
        <GoBack />
      </ButtonWrapper>
    </ColaContainer>
  );
}

export default Cola;
