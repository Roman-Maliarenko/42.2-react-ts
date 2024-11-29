import "./style.css";
import { AnimalCardProps } from "./types";
import { AnimalCardWrapper } from "./style";
import { AnimalCardWrapperImg } from "./style";
import { AnimalDataName } from "./style";
import { AnimalDataSpecies } from "./style";
// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

// interface AnimalCardProps {
//   animalData: Animal
// }

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalDataName>{animalData.name}</AnimalDataName>
      <AnimalDataSpecies>{animalData.species}</AnimalDataSpecies>
      <AnimalCardWrapperImg src={animalData.image}/>
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
