import { ChangeEvent, useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import {
  Homework08Container,
  FormWrapper,
  ResultWrapper,
  ResultBlock,
} from "./styles";

function Homework08() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [isShowResults, setIsShowResults] = useState<boolean>(false);
  const [firstResult, setFirstResult] = useState<string>("");
  const [secondResult, setSecondResult] = useState<string>("");

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
  };

  const showResult = (): void => {
    setFirstResult(firstNote);
    setSecondResult(secondNote);

    setIsShowResults(!isShowResults);
  };

  return (
    <Homework08Container>
      <FormWrapper>
        <Input
          name="first-note"
          placeholder="Enter first note"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
        <Button name="SHOW/HIDE RESULT" onClick={showResult} />
      </FormWrapper>
      {isShowResults && <ResultWrapper>
          {firstResult && <ResultBlock>{firstResult}</ResultBlock>}
          {secondResult &&  <ResultBlock>{secondResult}</ResultBlock>}
        </ResultWrapper>
      }
    </Homework08Container>
  );
}

export default Homework08;
