import Button from "components/Button/Button";
import { ButtonWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <ButtonWrapper>
      <Button name="Go Back" onClick={goBack} />
    </ButtonWrapper>
  );
}

export default GoBack;
