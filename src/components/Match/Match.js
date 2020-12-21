import React from "react";
import "./Match.css";
import { isNowFn, isPastFn } from "./utils";

const Match = ({ title, station, competition, time, datetime }) => {
  const now = new Date();
  const isNow = isNowFn(now, datetime);
  const isPast = isPastFn(now, datetime);

  return (
    <div className={`match ${isNow ? "on-air" : ""} ${isPast ? "past" : ""}`}>
      <div className="match-time">{time}</div>
      <div className="match-title">{title}</div>
      <div className="match-station">{station}</div>
      <div className="match-competition">{competition}</div>
    </div>
  );
};

export default Match;
