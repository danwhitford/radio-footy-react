import React from "react";
import "./Match.css";

const Match = ({ title, station, competition, time }) => {
  return (
    <div className="match">
      <div className="match-time">{time}</div>
      <div className="match-title">{title}</div>
      <div className="match-station">{station}</div>
      <div className="match-competition">{competition}</div>
    </div>
  );
};

export default Match;
