import styled from "@emotion/styled";

interface MainButtonStyledProps {
  disabled?:boolean; 
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 150px;
  height: 50px;
  background: ${({disabled}) => disabled? "grey" : "blue"};
  color: #fff;
  font-size: 24px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;

// export const MainButton = styled.button:hover <MainButtonStyledProps>`
//    background-color: rgb(1, 1, 246);
// `;



