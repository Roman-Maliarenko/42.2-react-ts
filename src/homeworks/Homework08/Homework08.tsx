import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  MainContainer,
  ButtonContainer,
  StyledBlock,
  FirstInputContainer,
  SecondInputContainer,
} from "./styles";

function Homework08() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [displayData, setDisplayData] = useState({ first: "", second: "" });

  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setDisplayData({ first: firstInput, second: secondInput });
    setShowData(true);
  };

  return (
    <MainContainer>
      <FirstInputContainer>
        <Input
          name={"first"}
          value={firstInput}
          onChange={(value) => setFirstInput(value)}
          placeholder="Enter first value"
        ></Input>
      </FirstInputContainer>
      <SecondInputContainer>
        <Input
          value={secondInput}
          name={"second"}
          onChange={(value) => setSecondInput(value)}
          placeholder="Enter second value"
        ></Input>
      </SecondInputContainer>
      <ButtonContainer>
        <Button name="Click" onClick={handleClick} type="button"></Button>
      </ButtonContainer>
      {showData && (
        <>
          <StyledBlock>{displayData.first}</StyledBlock>
          <StyledBlock>{displayData.second}</StyledBlock>
        </>
      )}
    </MainContainer>
  );
}

export default Homework08;
