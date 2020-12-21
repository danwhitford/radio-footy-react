import React from "react";
import Match from "../Match";
import "./MatchDay.css";

const MatchDay = ({ matches, date }) => {
  return (
    <>
      <h1 className="date-title">{date}</h1>
      <div>
        {matches.map((match) => (
          <Match
            key={match.station + match.title}
            station={match.station}
            time={match.time}
            competition={match.competition}
            title={match.title}
            datetime={match.datetime}
          />
        ))}
      </div>
    </>
  );
};

export default MatchDay;
