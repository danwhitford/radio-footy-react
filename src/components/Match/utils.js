import addHours from "date-fns/addHours";
import { isBefore, isWithinInterval } from "date-fns";

export const isNowFn = (now, starttime) => {
  const datetime = Date.parse(starttime);
  return isWithinInterval(now, { start: datetime, end: addHours(datetime, 2) });
};

export const isPastFn = (now, starttime) => {
  const datetime = Date.parse(starttime);
  return isBefore(addHours(datetime, 2), now);
};
