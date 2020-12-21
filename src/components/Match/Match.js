import React from "react";
import "./Match.css";
import addHours from 'date-fns/addHours'
import { isWithinInterval } from "date-fns";

const isNow = (startTime) => {
  const now = new Date()
  const endDt = addHours(matchDt, 2)
  return isWithinInterval(now, {start: startTime, end: addHours(startTime, 2)})
}

const Match = ({ title, station, competition, time }) => {

  return (
    <div className="match on-air">
      <div className="match-time">{time}</div>
      <div className="match-title">{title}</div>
      <div className="match-station">{station}</div>
      <div className="match-competition">{competition}</div>
    </div>
  );
};

export default Match;
