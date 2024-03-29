import WelcomePage from "./WelcomePage";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WelcomePage />;
        <footer>
          This project was coded by{" "}
          <a
            href="http://www.linkedin.com/in/julia-lozoya"
            target="_blank"
            rel="noreferrer"
          >
            Julia Lozoya
          </a>{" "}
          and it is open source on{" "}
          <a
            href="https://github.com/julialozmin/dictionaryapp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
