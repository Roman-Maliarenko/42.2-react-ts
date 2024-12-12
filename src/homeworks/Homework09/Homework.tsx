import Input from "components/Input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  Homework09Container,
  FirstInputContainer,
  SecondInputContainer,
  RandomImage,
  HeaderText,
} from "./styles";

function Homework09() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondtValue] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const imageOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(event.target.value);
  };

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondtValue(event.target.value);
  }

  const getRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage(response.data.message);
    } catch (err) {
      console.log(err);
    }

  };
  useEffect(() => {
    getRandomImage();
  }, [firstValue]);

  return (
    <Homework09Container>
      <HeaderText>Random Dog Image</HeaderText>
      <FirstInputContainer>
        <Input
          name="first"
          placeholder="Enter random symbol"
          value={firstValue}
          onChange={imageOnChange}
        />
      </FirstInputContainer>
      <SecondInputContainer>
        <Input
          name="second"
          placeholder="Enter text"
          value={secondValue}
          onChange={inputOnChange}
        />
      </SecondInputContainer>
      <RandomImage src={image} />
    </Homework09Container>
  );
}

export default Homework09;
