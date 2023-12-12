import React, { useState } from "react";
import ShowResults from "./ShowResults";
import DefinitionDisplay from "./DefinitionDisplay";
import axios from "axios";

import "./WelcomePage.css";

export default function WelcomePage() {
  const [word, setWord] = useState("");
  const [data, setData] = useState({});
  const [definitions, setDefinitions] = useState({});
  const [searchReady, setSearchReady] = useState(false);

  function handleResponse(response) {
    setData(response.data);
    setDefinitions(response.data[0].meanings);
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
    return (
      <div>
        <header className="WelcomePage-searchReady-header">
          <h1>dictionary</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="..." onChange={wordValue} />
            <input type="submit" value="Search Word" />
          </form>
        </header>

        <ShowResults data={data} />
        <DefinitionDisplay definitions={definitions} />
      </div>
    );
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
