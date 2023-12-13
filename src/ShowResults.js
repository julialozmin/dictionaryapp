import React from "react";

import "./ShowResults.css";

export default function ShowResults(props) {
  return (
    <section className="ShowResults text-center mt-5">
      <h5 className="targetWord">{props.data[0].word}</h5>
      <h5 className="wordPhonetics">{props.data[0].phonetic}</h5>
    </section>
  );
}
