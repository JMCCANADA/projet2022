import "./index.css";
import { useState } from "react";
import Card from "../Card";
import Characters from "../Characters";

const Modale = (props) => {


  return (
    <div className="CharactersContainer">
      {props.data.map((character) => {
        return <Card name={character.name} imageUrl={character.image} />;
      })}
    </div>
  );
};

export default Modale;