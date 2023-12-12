import React from "react";
import Synonyms from "./Synonyms";

import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="singleDefinition">{definition.definition}</p>
            <p className="example">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
