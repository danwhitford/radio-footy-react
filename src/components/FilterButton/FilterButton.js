import React from "react";
import "./filterButton.css";

const FilterButton = ({ onClick, value, invert }) => {
  return (
    <div
      className="filter-button"
      onClick={onClick}
      style={{
        color: invert ? "white" : "#0e0e0e",
        backgroundColor: invert ? "#0e0e0e" : "white",
      }}
    >
      {value}
    </div>
  );
};

export default FilterButton;
