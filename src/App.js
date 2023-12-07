import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>dictionary</h1>
        <h5>
          A picture is worth a thousand words, but you cannot explain pictures
          without words
        </h5>
      </header>
      <form>
        <input type="search" placeholder="..."></input>
        <input type="submit">Search Word</input>
      </form>
    </div>
  );
}

export default App;
