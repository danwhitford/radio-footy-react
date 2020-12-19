import React from "react";

const FilterOpts = ({
  filterCategory,
  filterValue,
  setFilterCategory,
  setFilterValue,
  matches,
}) => {
  let competitions = matches
    .flatMap((day) => day.matches.map((match) => match.competition))
    .filter((x, i, a) => a.indexOf(x) == i)
    .sort();
  let teams = matches
    .flatMap((day) => day.matches.flatMap((match) => match.title.split(" v ")))
    .filter((x, i, a) => a.indexOf(x) == i)
    .sort();
  let stations = matches
    .flatMap((day) => day.matches.map((match) => match.station))
    .filter((x, i, a) => a.indexOf(x) == i)
    .sort();

  const filterOptions = () => {
    switch (filterCategory) {
      case "team": {
        return teams;
      }
      case "competition": {
        return competitions;
      }
      case "station": {
        return stations;
      }
      default: {
        return [];
      }
    }
  };

  return (
    <div>
      <span>Filter by:</span>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="None">None</option>
        <option value="team">Team</option>
        <option value="station">Station</option>
        <option value="competition">Competition</option>
      </select>
      {filterCategory !== "None" && (
        <select
          disabled={filterCategory === "None"}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="None">None</option>
          {filterOptions().map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FilterOpts;
