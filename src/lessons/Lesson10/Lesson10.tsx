import {
  Lesson10Container,
  DataContainer,
  ButtonContainer,
  AllDataContainer,
  Container,
} from "./styles";
import { useState } from "react";
import Button from "components/Button/Button";
import axios from "axios";

function Lesson10() {

  const updataData = (oldData: string[], newData: string[]) => {
    return [...oldData, ...newData];
  };

  const [data, setData] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setError] = useState<string>("")

  const onClickData = async () => {
    const CAT_FACTS = "https://catfact.ninja/fact";
    try {
      setError("Error");
      const response = await axios.get(CAT_FACTS);
      setData((prevData) => updataData(prevData, [response.data.fact]));
      setVisible(true);
    } catch (error) {
      setError(errors)
    }
  };

  const onDeleteData = () => {
    setData([]);
    setVisible(false);
    setError("Error")
  };

  const renderData = data.map((fact, index) => (
    <Container key={index}>{fact}</Container>
  ));

  return (
    <Lesson10Container>
      <ButtonContainer>
        <Button name="GET MORE INFO" type="button" onClick={onClickData} />
      </ButtonContainer>
      <AllDataContainer>
        {visible && <DataContainer>{renderData}</DataContainer>}
      </AllDataContainer>
      <ButtonContainer>
        {visible && (
          <Button name="DELETE ALL DATA" type="button" onClick={onDeleteData} />
        )}
      </ButtonContainer>
    </Lesson10Container>
  );
}

export default Lesson10;
