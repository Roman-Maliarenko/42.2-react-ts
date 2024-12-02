import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  width: 300px;
  height: 50px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  ${boxBasicStyles}
`;

export const FirstInputContainer = styled.div`
  ${boxBasicStyles}
`;

export const SecondInputContainer = styled.div`
  ${boxBasicStyles}
`;

export const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: solid 2px black;
  font-size: 24px;
  ${boxBasicStyles}
`;
