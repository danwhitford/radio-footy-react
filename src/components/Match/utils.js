import addHours from 'date-fns/addHours'
import { isAfter, isWithinInterval } from "date-fns";

export const isNowFn = (now, starttime) => {
    const datetime = Date.parse(starttime)
    return isWithinInterval(now, { start: datetime, end: addHours(datetime, 2) })
}

export const isPastFn = (now, starttime) => {
    const datetime = Date.parse(starttime)
    return isAfter(now, addHours(datetime, 2))
}