import Button from "../Button/Button";
import { useState } from "react";

import { Body } from "./style";
import { CounterContainer } from "./style";
import { ButtonDislikes } from "./style";
import { ButtonLikes } from "./style";
import { CounterDislikes } from "./style";
import { CounterLikes } from "./style";
import { ButtonReset } from "./style";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLikesClick = (): void => {
    setLikes(likes + 1);
  };

  const onDislikesClick = (): void => {
    setDislikes(dislikes + 1);
  };

  const onResetClick = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <Body>
      <CounterContainer className="counter-container">
        <CounterLikes className="counter-likes">{likes}</CounterLikes>
        <ButtonLikes className="button-likes">
          <Button name={"Like 👍"} onClick={onLikesClick} />
        </ButtonLikes>
        <ButtonReset className="button-reset">
          <Button name={"Reset"} onClick={onResetClick} />
        </ButtonReset>
        <ButtonDislikes className="button-dislike">
          <Button name={"Dislike 👎"} onClick={onDislikesClick} />
        </ButtonDislikes>
        <CounterDislikes className="counter-dislikes">
          {dislikes}
        </CounterDislikes>
      </CounterContainer>
    </Body>
  );
}

export default Feedback;

// кнопка “Like” и слева от неё количество лайков
// кнопка “Dislike" и справа от неё количество дизлайков
// Кнопка “Reset Results”, при клике на которую, лайки и дизлайки обнуляются
// Для кнопок используйте компонент Button
// Стили на ваше усмотрение
