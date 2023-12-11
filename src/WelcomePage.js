import React, { useState } from "react";
import ShowResults from "./ShowResults";
import axios from "axios";

import "./WelcomePage.css";

export default function WelcomePage() {
  const [word, setWord] = useState("");
  const [data, setData] = useState({});
  const [searchReady, setSearchReady] = useState(false);

  function handleResponse(response) {
    setData(response.data);
    setSearchReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function wordValue(event) {
    setWord(event.target.value);
  }

  if (searchReady) {
    return <ShowResults data={data} />;
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
