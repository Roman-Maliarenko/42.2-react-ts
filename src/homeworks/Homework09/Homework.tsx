import Input from "components/Input/Input";

import {
  Homework09Container,
  FirstInputContainer,
  SecondInputContainer,
  RandomImage,
  HeaderText,
} from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

function Homework09() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondtValue] = useState<string>("");
  const [image, setImage] = useState("");

  const imageOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(event.target.value);
  };

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
      <HeaderText>
        Random Dog Image
      </HeaderText>
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
          onChange={(e) => setSecondtValue(e.target.value)}
        />
      </SecondInputContainer>
      <RandomImage src={image} />
    </Homework09Container>
  );
}

export default Homework09;
