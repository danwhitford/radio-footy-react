import React from "react";
import "./Match.css";
import addHours from 'date-fns/addHours'
import { isWithinInterval } from "date-fns";

const isNowFn = startime => {
  const datetime = Date.parse(startime)
  return isWithinInterval(new Date(), {start: datetime, end: addHours(datetime, 2)})
}

const Match = ({ title, station, competition, time, datetime }) => {
  const isNow = isNowFn(datetime)

  return (
    <div className={`match ${isNow ? 'on-air' : ''}`}>
      <div className="match-time">{time}</div>
      <div className="match-title">{title}</div>
      <div className="match-station">{station}</div>
      <div className="match-competition">{competition}</div>
    </div>
  );
};

export default Match;
