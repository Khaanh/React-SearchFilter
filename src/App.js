import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import Bookdata from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder={"Enter a Book Name..."} data={Bookdata} />
    </div>
  );
}

export default App;
