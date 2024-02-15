import React from "react";
import Synonyms from "./Synonyms";

import "./styles/Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h4 className="wordType">{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="singleDefinition">{definition.definition}</p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
      <Synonyms data={props.meanings.synonyms} />
    </div>
  );
}
