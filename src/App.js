import React, { useEffect, useState } from "react";
import MatchDay from "./components/MatchDay";
import "./App.css";
import FilterOpts from "./components/FilterOpts";

function App() {
  const [matches, setMatches] = useState([]);
  const [filterCategory, setFilterCategory] = useState("None");
  const [filterValue, setFilterValue] = useState("None");

  useEffect(() => {
    fetch("http://localhost:8080/data.json")
      .then((r) => r.json())
      .then((j) => setMatches(j));
  }, [setMatches]);

  useEffect(() => {
    if (filterCategory === "None") {
      setFilterValue("None");
    }
  }, [filterCategory, setFilterValue]);

  return (
    <div className="App">
      <FilterOpts
        filterCategory={filterCategory}
        filterValue={filterValue}
        setFilterCategory={setFilterCategory}
        setFilterValue={setFilterValue}
        matches={matches}
      />

      <h1 className="title">Football</h1>
      <h2 className="subtitle">on the radio</h2>

      {matches.map((day) => (
        <MatchDay key={day.date} date={day.date} matches={day.matches} />
      ))}
    </div>
  );
}

export default App;
