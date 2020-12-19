import React from "react";
import Select from "react-select";

const FilterOpts = ({
  filterCategory,
  filterValue,
  setFilterCategory,
  setFilterValue,
  matches,
}) => {
  let competitions = matches
    .flatMap((day) => day.matches.map((match) => match.competition))
    .filter((x, i, a) => a.indexOf(x) === i)
    .sort();
  let teams = matches
    .flatMap((day) => day.matches.flatMap((match) => match.title.split(" v ")))
    .filter((x, i, a) => a.indexOf(x) === i)
    .sort();
  let stations = matches
    .flatMap((day) => day.matches.map((match) => match.station))
    .filter((x, i, a) => a.indexOf(x) === i)
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

  const filterCategoryOptions = [
    { value: "team", label: "Team" },
    { value: "station", label: "Station" },
    { value: "competition", label: "Competition" },
  ]

  const filterValueOptions = filterOptions().map(opt => {return {
    value: opt,
    label: opt,
  }})

  return (
    <div>
      <Select
        placeholder="Filter by..."
        onChange={(e) => {
          setFilterCategory(e ? e.value : 'None')
        }}
        options={filterCategoryOptions}
        value={filterCategoryOptions.find(o => o.value === filterCategory) || 'None'}
        isClearable
      />
      {filterCategory !== "None" && (
          <Select
            options={filterValueOptions}
            onChange={(e) => setFilterValue(e.value)}
            value={filterValueOptions.find(o => o.value === filterValue) || 'None'}
          />
      )}
    </div>
  );
};

export default FilterOpts;
