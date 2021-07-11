import { farFuture, phraseEndpoint, saintsEndpoint } from "./consts";
import { dbSaintInfo, Phrase, SaintInfo } from "./interfaces";

export function createDateTrigger(hourTrigger: number, minuteTrigger: number) {
    const rn = new Date()
    if (hourTrigger < rn.getHours() || hourTrigger == rn.getHours() && minuteTrigger < rn.getMinutes())
        rn.setDate(rn.getDate() + 1);
    rn.setHours(hourTrigger, minuteTrigger);

    return rn;
}

export function secondsLeftTo(hour: number, minute: number) {
    const now = new Date();
    const future = createDateTrigger(hour, minute);
    let dif = now.getTime() - future.getTime();
    const seconds = Math.abs(dif / 1000);

    return seconds;
}

export function parseTimestrToDate(str: string) {
    //Expected string = 20:15:30 GMT-0300 (-03)
    const split = str.split(':');
    try {
        const hour = parseInt(split[0]);
        const minute = parseInt(split[1]);
        const now = new Date();
        const final = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute)
        return final;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}

export function nearestNotification(notifs) {
    let min = farFuture;
    for (let i = 0; i < notifs.length; i++) {
        try {
            const date = notifs[i].content.data;
            const now = new Date();
            const realDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), date.hourTrig, date.minuteTrig)
            if (realDate.getTime() < min.getTime())
                min = realDate;
        }
        catch (e) {
            console.error(e);
        }
    }
    return min;
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

    console.log("checkDataNotOutdated(): Flag: ", flag)
    const res = flag ? obj : await fetchFromServer(endpoint);
    console.log("checkDataNotOutdated(): Res: ", res);
    return res;
}

export function compareTodayvsDate(date: string) {
    const now = new Date();
    console.log("compareTodayvsDate(): received: date: ", date, " today: ", getDateStr(now, true))
    return getDateStr(now, true) === date;
}

export function getDateStr(date: Date, incrementMonth: Boolean) {
    const year = date.getFullYear();
    const month = incrementMonth ? date.getMonth() + 1 : date.getMonth();
    const dat = date.getDate();
    const fullStr = year.toString() + '-' + (month < 10 ? '0' + month.toString() : month.toString()) + '-' + dat.toString();
    return fullStr;
}