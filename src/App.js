import React, { useEffect, useState } from "react";
import MatchDay from "./components/MatchDay";
import "./App.css";
import FilterButton from "./components/FilterButton";
import FilterSection from "./components/FilterSection";

function App() {
  const [matchDays, setMatchDays] = useState([]);
  const [filterCategory, setFilterCategory] = useState("None");
  const [filterValue, setFilterValue] = useState("None");
  const [showFilters, setShowFilters] = useState(false);

  let competitions = matchDays
  .flatMap((day) => day.matches.map((match) => match.competition))
  .filter((x, i, a) => a.indexOf(x) === i)
  .sort();
let teams = matchDays
  .flatMap((day) => day.matches.flatMap((match) => match.title.split(" v ")))
  .filter((x, i, a) => a.indexOf(x) === i)
  .sort();
let stations = matchDays
  .flatMap((day) => day.matches.map((match) => match.station))
  .filter((x, i, a) => a.indexOf(x) === i)
  .sort();

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
    <>
      <div
        style={{
          boxShadow: "0px 2px 2px -2px lightgrey",
          backgroundColor: showFilters ? "#0e0e0e" : "white",
        }}
      >
        <div
          className="header-grid"
          style={{
            display: "grid",
            alignItems: "center",
            verticalAlign: "middle",
            marginBottom: "20px",
            padding: "10px",
            maxWidth: "400px",
            margin: "0 auto",
            color: showFilters ? "white" : "#0e0e0e",
          }}
        >
          <FilterButton
            onClick={() => setShowFilters(!showFilters)}
            value={!showFilters ? "Show filters" : "Close filters"}
            invert={showFilters}
          />

          <h1
            className="title"
            style={{
              gridColumn: 1,
              gridRow: 1,
            }}
          >
            {showFilters ? "Filter matches" : "Football on the radio"}
          </h1>
        </div>
      </div>

      <div className="App">
        {showFilters && <FilterSection teams={teams} stations={stations} competitions={competitions}/>}

        {filterMatches().map((day) => (
          <MatchDay key={day.date} date={day.date} matches={day.matches} />
        ))}
      </div>
    </>
  );
}

export default App;
