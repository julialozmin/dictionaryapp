import React from "react";

import "./Definition.css";

export default function Definition(props) {
  console.log(props.meanings);
  console.log(props.meanings.partOfSpeech);

  return (
    <div className="Definition">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="singleDefinition">{definition.definition}</p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
