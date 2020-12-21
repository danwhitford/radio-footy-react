import { isNowFn, isPastFn } from "../utils"

const fakeNow = Date.parse("2020-12-01Z12:00")

test("is now works when game is in past", () => {
    const res = isNowFn(fakeNow, '2020-12-01Z09:00')
    expect(res).toEqual(false)
});

test("is now works when game is on now", () => {
    const res = isNowFn(fakeNow, '2020-12-01Z11:30')
    expect(res).toEqual(true)
});

test("is now works when game is in future", () => {
    const res = isNowFn(fakeNow, '2020-12-01Z12:30')
    expect(res).toEqual(false)
});

test("is past works when game is in past", () => {
    const res = isPastFn(fakeNow, '2020-12-01Z09:30')
    expect(res).toEqual(true)
});

test("is past works when game is on", () => {
    const res = isPastFn(fakeNow, '2020-12-01Z11:30')
    expect(res).toEqual(false)
});

test("is past works when game is in future", () => {
    const res = isPastFn(fakeNow, '2020-12-01Z12:30')
    expect(res).toEqual(false)
});
