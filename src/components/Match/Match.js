import React from "react";
import "./Match.css";
import addHours from 'date-fns/addHours'
import { isAfter, isWithinInterval } from "date-fns";

const isNowFn = starttime => {
  const datetime = Date.parse(starttime)
  return isWithinInterval(new Date(), {start: datetime, end: addHours(datetime, 2)})
}

const isPastFn = starttime => {
  const datetime = Date.parse(starttime)
  return isAfter(new Date(), addHours(datetime, 2))
}

const Match = ({ title, station, competition, time, datetime }) => {
  const isNow = isNowFn(datetime)
  const isPast = isPastFn(datetime)

  return (
    <div className={`match ${isNow ? 'on-air' : ''} ${isPast ? 'past' : ''}`}>
      <div className="match-time">{time}</div>
      <div className="match-title">{title}</div>
      <div className="match-station">{station}</div>
      <div className="match-competition">{competition}</div>
    </div>
  );
};

export default Match;
