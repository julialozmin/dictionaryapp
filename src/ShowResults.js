import React from "react";

import "./ShowResults.css";

export default function ShowResults(props) {
  console.log(props.data);

  return (
    <div className="ShowResults text-center">
      <header className="ShowResults-header">
        <h1>dictionary</h1>
        <form>
          <input type="search" placeholder="..." />
          <input type="submit" value="Search Word" />
        </form>
      </header>
      <div className="content">
        <h5>{props.data[0].word}</h5>

        {/* <DefinitionDisplay /> */}
      </div>
    </div>
  );
}
