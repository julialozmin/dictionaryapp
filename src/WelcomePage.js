import React, { useState } from "react";
import ShowResults from "./ShowResults";
import DefinitionDisplay from "./DefinitionDisplay";
import ImagesDisplay from "./ImagesDisplay";
import axios from "axios";

import "./WelcomePage.css";

export default function WelcomePage() {
  const [word, setWord] = useState("");
  const [data, setData] = useState({});
  const [definitions, setDefinitions] = useState({});
  const [searchReady, setSearchReady] = useState(false);
  let [photosData, setPhotosData] = useState(null);

  function handleDictionaryResponse(response) {
    setData(response.data);
    setDefinitions(response.data[0].meanings);
    setSearchReady(true);
  }

  function handleImagesResponse(response) {
    setPhotosData(response.data.photos);
    console.log(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let imagesApiKey = `o214a6c6f6d2f53a6749b30tbf45c1ef`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imagesApiKey}`;

    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function wordValue(event) {
    setWord(event.target.value);
  }

  if (searchReady) {
    return (
      <div className="searchReady">
        <div className="row">
          <div className="col-3">
            <header className="WelcomePage-searchReady-header">
              <h1>dictionary</h1>
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="..." onChange={wordValue} />
                <input type="submit" value="Search Word" />
              </form>
            </header>
            <ShowResults data={data} />
          </div>

          <div className="col-9">
            <DefinitionDisplay definitions={definitions} />
          </div>
        </div>

        <div className="row">
          <div className="col-9">
            <ImagesDisplay data={photosData} />
          </div>
        </div>
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
