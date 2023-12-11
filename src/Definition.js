import React from "react";

import "./Definition.css";

export default function Definition(props) {
  console.log(props.definition);
  console.log(props.definition.partOfSpeech);

  return (
    <div className="Definition">
      <h4>{props.definition.partOfSpeech}</h4>
      {props.definition.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
