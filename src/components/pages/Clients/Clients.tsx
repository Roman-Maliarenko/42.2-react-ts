import GoBack from "components/GoBack/GoBack";
import {
  ClientsComponent,
  NavContainer,
  StyledLink,
  Main,
  Title,
  ButtonWrapper,
} from "./styles";

function Clients() {
  return (
    <ClientsComponent>
      <NavContainer>
        <StyledLink to="cola">ColaCola</StyledLink>

        <StyledLink to="fanta">Fanta</StyledLink>

        <StyledLink to="sprite">Sprite</StyledLink>
      </NavContainer>
      <Main>
        <Title>Clients</Title>
        The most famous drinks in history
        <ButtonWrapper><GoBack /></ButtonWrapper>
      </Main>
    </ClientsComponent>
  );
}

export default Clients;
