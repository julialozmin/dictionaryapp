import React from "react";
import Definition from "./Definition";

import "./DefinitionDisplay.css";

export default function DefinitionsDisplay(props) {
  if (props.definitions) {
    console.log(props.definitions);
    return (
      <div className="DefinitionsDisplay">
        {props.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {" "}
              <Definition definition={definition} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
