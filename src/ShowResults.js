import React, { useState } from "react";
import axios from "axios";

import "./ShowResults.css";

export default function ShowResults(props) {
  const [word, setWord] = useState("");

  //   function handleSubmit(event) {
  //     event.preventDefault();

  //     <ShowResults wordTarget={word} />;
  //   }
  //   function wordValue(event) {
  //     setWord(event.target.value);
  //   }

  return (
    <div className="ShowResults text-center">
      <header className="ShowResults-header">
        <h1>dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="..." onChange={wordValue} />
          <input type="submit" value="Search Word" />
        </form>
      </header>
      <div className="content">
        <h5>The word is....{props.targetWord}</h5>
      </div>
    </div>
  );
}
