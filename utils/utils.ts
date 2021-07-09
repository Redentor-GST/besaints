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
    if (from === phraseEndpoint) {
        const json = await data.json();
        const res = typeof (json.date) === 'string' ? {
            text: json.text,
            author: json.author,
            date: parseDate(json.date)
        } : json;
        return res;
    }
    else if (from === saintsEndpoint) {
        const json = await data.json();
        const res = typeof (json.date) === 'string' ? {
            saints_data: json.saints_data,
            date: parseDate(json.date)
        } : json;
        return res;
    }
    else return null;
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
    return flag ? obj : fetchFromServer(endpoint);
}

/**
 * Parse a date string CORRECTLY
 * Like, who tf thought "oh, lets make the months go from 0 to 11" ¿?¿?_¿?¿?¿?¿"
 * @param dateStr date string (expected something like yy-mm-dd)
 * @returns date parsed
 */
export function parseDate(dateStr: string): Date {
    //Expected string 2021-07-07
    // const splitted = dateStr.split('-');
    // const newNum = parseInt(splitted[1]) + 1;
    // const newNumStr = newNum < 10 ? '0' + newNum.toString() : newNum.toString();
    // const str = splitted[0] + '-' + newNumStr + '-' + splitted[2];
    return new Date(Date.parse(dateStr));
}

export function compareTodayvsDate(date: Date) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const _date = new Date(date);
    //For the flies
    _date.setHours(0, 0, 0, 0);
    return _date.getTime() === now.getTime();
}