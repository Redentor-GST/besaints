import { dbSaintInfo, Phrase } from "./interfaces";

export function createDateTrigger(date: string, hourTrigger: number, minuteTrigger: number): Date {
    const parsed = parseStrDate(date);
    const month = parsed[0];
    const day = parsed[1];
    const rn = new Date()
    const dateTrigger = new Date(rn.getFullYear(), month - 1, day);
    dateTrigger.setHours(hourTrigger, minuteTrigger, 0);
    return dateTrigger;
}

function parseStrDate(date: string): [number, number] {
    //Expected string "07-15"
    const split = date.split('-');
    const month = parseInt(split[0]);
    const day = parseInt(split[1]);
    return [month, day];
}

export async function fetchFromServer(from: string) {
    const data = await fetch(from);
    return data.json();
}

/**
 * @param obj the object to check the date
 * @param endpoint the endpoint to in case of the object being outdated, fetch the object
 * @returns the updated object
 */
export async function checkDataNotOutdated(obj: dbSaintInfo | Phrase, endpoint: string): Promise<any> {
    let flag = true;
    if (!obj)
        flag = false;
    else if (!compareTodayvsDate(obj.date))
        flag = false;

    console.log("checkDataNotOutdated(): Flag: ", flag);
    const res = flag ? obj : await fetchFromServer(endpoint);
    console.log("checkDataNotOutdated(): Res: ", res);
    return res;
}

export function compareTodayvsDate(date: string) {
    const now = new Date();
    return getDateStr(now, true) === date;
}

export function getDateStr(date: Date, incrementMonth: Boolean) {
    const month = incrementMonth ? date.getMonth() + 1 : date.getMonth();
    const dat = date.getDate();
    const fullStr = (month < 10 ? '0' + month.toString() : month.toString()) + '-' + dat.toString();
    return fullStr;
}

export const isLeapYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}