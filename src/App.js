import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>dictionary</h1>
        <h5>
          A picture is worth a thousand words,
          <br />
          but you cannot explain pictures without words
        </h5>
        <form>
          <input type="search" placeholder="..." />
          <input type="submit" value="Search Word" />
        </form>
      </header>
    </div>
  );
}

export default App;
