import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    id: "1",
    factId:
      "FACT 1!!! U.S. Marshal Investigator: Teddy Daniels, portrayed by Leonardo DiCaprio in Shutter Island, is a U.S. Marshal sent to investigate the disappearance of a prisoner at Ashecliffe Hospital, a mental institution for the criminally insane on Shutter Island.",
  },
  {
    id: "2",
    factId:
      "FACT 2!!! Haunted by War Trauma: Teddy Daniels is haunted by traumatic experiences from his time as a soldier during World War II. His involvement in the liberation of the Dachau concentration camp has left him with deep emotional scars, contributing to his struggle with post-traumatic stress disorder (PTSD).",
  },
  {
    id: "3",
    factId:
      "FACT 3!!!  Psychological Journey: Throughout the film, Teddy Daniels undergoes a complex psychological journey. As he delves into the investigation on Shutter Island, the line between reality and delusion becomes increasingly blurred. The character's mental state and past traumas play a crucial role in shaping the narrative's suspenseful and psychological elements.",
  },
];

const ParamPage = () => {
  const param = useParams();
  const fact = data.find((fact) => fact.id === param.id);
  if (!fact) {
    return <div className="no-fact">Fact Not Found!!!</div>;
  }
  return (
    <div className="facts">
      <h1>3 Facts About Teddy Daniels:</h1>
      <p>{fact.factId}</p>
    </div>
  );
};

export default ParamPage;
