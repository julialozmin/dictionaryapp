import React from "react";

import "./ShowResults.css";

export default function ShowResults(props) {
  return (
    <div className="ShowResults text-center">
      <h5 className="targetWord">{props.data[0].word}</h5>
      <h5 className="wordPhonetics">{props.data[0].phonetic}</h5>
    </div>
  );
}
