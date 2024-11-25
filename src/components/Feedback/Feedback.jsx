import Button from "../Button/Button";
import { useState } from "react";
import "./style.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLikesClick = () => {
    setLikes(likes + 1);
  };

  const onDislikesClick = () => {
    setDislikes(dislikes + 1);
  };

  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="counter-container">
        <div className="counter-likes">{likes}</div>
      <div className="button-likes">
        <Button buttonName={"Like 👍"} onClick={onLikesClick} />
      </div>
      <div className="button-reset">
        <Button buttonName={"Reset"} onClick={onResetClick} />
      </div>
      <div className="button-dislike">
        <Button buttonName={"Dislike 👎"} onClick={onDislikesClick} />
      </div>
        <div className="counter-dislikes">{dislikes}</div>
    </div>
  );
}

export default Feedback;

// кнопка “Like” и слева от неё количество лайков
// кнопка “Dislike" и справа от неё количество дизлайков
// Кнопка “Reset Results”, при клике на которую, лайки и дизлайки обнуляются
// Для кнопок используйте компонент Button
// Стили на ваше усмотрение
