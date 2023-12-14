import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <section className="Synonyms">
        {props.data.map(function (synonym, index) {
          if (index < 6) {
            return (
              <div className="synonymResults" key={index}>
                {" "}
                {synonym}{" "}
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return null;
  }
}
