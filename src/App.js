import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function runSearch() {
    const li = document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML.toLowerCase().includes(search)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <input
          value={search}
          type="text"
          id="search"
          placeholder="Search a country..."
          autoComplete="off"
          onChange={(e) => {
            setSearch(e.target.value);
            runSearch();
          }}
        />

        <ul id="list">
          <li>USA</li>
          <li>Nigeria</li>
          <li>China</li>
          <li>Japan</li>
          <li>Australia</li>
          <li>South Africa</li>
          <li>Gambia</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
