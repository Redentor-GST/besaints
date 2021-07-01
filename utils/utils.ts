import { farFuture } from "./consts";

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