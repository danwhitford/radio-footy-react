import React, { useEffect, useState } from "react";
import MatchDay from "./components/MatchDay";
import "./App.css";
import FilterOpts from "./components/FilterOpts";

function App() {
  const [matchDays, setMatchDays] = useState([]);
  const [filterCategory, setFilterCategory] = useState("None");
  const [filterValue, setFilterValue] = useState("None");

  useEffect(() => {
    fetch("https://shaftoe44.github.io/radio-footy/data.json")
      .then((r) => r.json())
      .then((j) => setMatchDays(j));
  }, [setMatchDays]);

  useEffect(() => {
    setFilterValue("None");
  }, [filterCategory, setFilterValue]);

  const filterMatches = () => {
    if (filterCategory === "None" || filterValue === "None") {
      return matchDays;
    }

    if (filterCategory === "team") {
      return matchDays
        .map((day) => {
          return {
            ...day,
            matches: day.matches.filter((match) =>
              match.title.split(" v ").includes(filterValue)
            ),
          };
        })
        .filter((day) => day.matches.length > 0);
    } else if (filterCategory === "station") {
      return matchDays
        .map((day) => {
          return {
            ...day,
            matches: day.matches.filter(
              (match) => match.station === filterValue
            ),
          };
        })
        .filter((day) => day.matches.length > 0);
    } else if (filterCategory === "competition") {
      return matchDays
        .map((day) => {
          return {
            ...day,
            matches: day.matches.filter(
              (match) => match.competition === filterValue
            ),
          };
        })
        .filter((day) => day.matches.length > 0);
    } else {
      console.warn(
        'Filter is not "None" but is not recognised: ' + filterCategory
      );
      return matchDays;
    }
  };

  return (
    <div className="App">
      <FilterOpts
        filterCategory={filterCategory}
        filterValue={filterValue}
        setFilterCategory={setFilterCategory}
        setFilterValue={setFilterValue}
        matches={matchDays}
      />

      <h1 className="title">Football</h1>
      <h2 className="subtitle">on the radio</h2>

      {filterMatches().map((day) => (
        <MatchDay key={day.date} date={day.date} matches={day.matches} />
      ))}
    </div>
  );
}

export default App;
