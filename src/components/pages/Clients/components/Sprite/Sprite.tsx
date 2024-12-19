import GoBack from "components/GoBack/GoBack";
import {
  SpriteContainer,
  SpriteTitle,
  Description,
  ButtonWrapper,
} from "./styles";

function Sprite() {
  return (
    <SpriteContainer>
      <SpriteTitle>Sprite</SpriteTitle>
      <Description>Introduced in 1961, Sprite is the world's leading lemon-flavored beverage.</Description>
      <ButtonWrapper>
        <GoBack />
      </ButtonWrapper>
    </SpriteContainer>
  );
}

export default Sprite;
