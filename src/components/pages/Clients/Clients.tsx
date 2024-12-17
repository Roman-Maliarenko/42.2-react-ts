
import {
  ClientsComponent,
  Header,
  LogoContainer,
  NavContainer,
  StyledNavLink,
  Main,
} from "./styles";
import { ClientsProps } from "./type";
function Clients({ children }: ClientsProps) {
  return (
    <ClientsComponent>
      <Header>
        <LogoContainer></LogoContainer>
        <NavContainer>
          <StyledNavLink to="firstComponent" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Sprite</StyledNavLink>
          <StyledNavLink to="/secondComponent" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Fanta</StyledNavLink>
          <StyledNavLink to="/thirdComponent" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Cola</StyledNavLink>
        </NavContainer>
      </Header>
      <Main>
        {children}
      </Main>
    </ClientsComponent>
  );
}

export default Clients;
