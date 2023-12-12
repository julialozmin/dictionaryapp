import React from "react";
import Definition from "./Definition";

import "./DefinitionDisplay.css";

export default function DefinitionsDisplay(props) {
  if (props.definitions) {
    return (
      <div className="DefinitionsDisplay">
        {props.definitions.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Definition meanings={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
