import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 60px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  font-size: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const ButtonWrapper = styled.div``;
