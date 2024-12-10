import {
  Homework10Container,
  DataContainer,
  ButtonContainer,
  AllDataContainer,
  Container,
} from "./styles";
import { useState } from "react";
import Button from "components/Button/Button";

function Homework10() {
  const [data, setData] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const onClickData = async () => {
    const CAT_FACTS = "https://catfact.ninja/fact";
    try {
      const response = await fetch(CAT_FACTS);
      if (!response.ok) {
        throw new Error("Error");
      }
      const result = await response.json();
      setData((prevData) => updataData(prevData, [result.fact]));
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteData = () => {
    setData([]);
    setVisible(false);
  };
  const updataData = (oldData: string[], newData: string[]) => {
    return [...oldData, ...newData];
  };

  return (
    <Homework10Container>
      <ButtonContainer>
        <Button name="GET MORE INFO" type="button" onClick={onClickData} />
      </ButtonContainer>
    <AllDataContainer>{visible}
        <DataContainer>
          {visible && data.map((fact) => <Container>{fact}</Container>)}
        </DataContainer>
      </AllDataContainer>
      <ButtonContainer>
        {visible && (
          <Button name="DELETE ALL DATA" type="button" onClick={onDeleteData} />
        )}
      </ButtonContainer>
    </Homework10Container>
  );
}

export default Homework10;