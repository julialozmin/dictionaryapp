import React from "react";
import "./styles/Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <section className="Synonyms">
        {props.data.map(function (synonym, index) {
          return (
            <div className="synonymResults" key={index}>
              {" "}
              {synonym}{" "}
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
