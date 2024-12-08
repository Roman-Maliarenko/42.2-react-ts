import axios from "axios";
import { Homework10Container, DataContainer } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "components/Button/Button";

function Homework10() {
  const [dataCats, setDataCats] = useState<string>("");
  const [catImageUrl, setCatImgUrl] = useState<string | undefined>(undefined);
  const CAT_FACT = "https://catfact.ninja/fact";

 
 

  return (
    <Homework10Container>
      <Button name="GET MORE INFO" type="button" onClick={() => {}} />
      <DataContainer></DataContainer>
      <Button name="DELETE ALL DATA" type="button" onClick={() => {}} />
    </Homework10Container>
  );
}

export default Homework10;

// При загрузке страницы должен происходить запрос на получение данных
// Данные должны отображаться в стилизованном блоке на странице
// Пока данных нет, то блок отображаться не должен
// Также на странице должна быть кнопка ‘GET MORE INFO’, при нажатии на которую также должен происходить запрос данных
// При получении данных после клика на кнопку они должны появиться на экране под предыдущими данными в том же блоке
// Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен, а должен появиться скролл внутри блока с данными
// На странице должна быть вторая кнопка “DELETE ALL DATA”, которая будет удалять все полученные данные (при отсутствии фактов в блоке, кнопка должна исчезать)
// Создайте компонент индикатора загрузки, который будет появляться в процессе получения данных и исчезать, когда данные получены (Spinner или др).
//  Его необходимо использовать в компоненте Lesson 10 P.S. Индикатором загрузки не должен быть текст
