import React, { useState } from "react";
import ShowResults from "./ShowResults";

import "./WelcomePage.css";

export default function WelcomePage() {
  const [word, setWord] = useState("");
  const [searchReady, setSearchReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchReady(true);
  }
  function wordValue(event) {
    setWord(event.target.value);
  }

  if (searchReady) {
    return <ShowResults targetWord={word} />;
  } else {
    return (
      <div className="WelcomePage">
        <header className="WelcomePage-header text-center">
          <h1>dictionary</h1>
          <h5>
            A picture is worth a thousand words,
            <br />
            but you cannot explain pictures without words
          </h5>
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="..." onChange={wordValue} />
            <input type="submit" value="Search Word" />
          </form>
        </header>
      </div>
    );
  }
}
