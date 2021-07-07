import Database from "../db/db";
import scheduleNotification from "../utils/push";
import { defineTask, registerTask } from "./BackgroundTasksUtils";

const db = new Database();
const TASK_NAME = 'ScheduleNotification';

export default class ScheduleNotificationTask {
    private scheduleNotificationTask = async () => {
        const today = new Date();
        //console.log(today.toTimeString() + " scheduleNotificationTask running")
        console.log("=====================================================================");
        console.log(today.toString() + " Schedule Notification Task Running")
        const dbssn = await db.getShouldSendNotifications();
        if (!dbssn) return;

        const dbDateTrigger = await db.getDateTrigger()
        dbDateTrigger ?
            await scheduleNotification(false, dbDateTrigger.getHours(), dbDateTrigger.getMinutes()) :
            await scheduleNotification(false)
    }

    public async init() {
        defineTask(TASK_NAME, this.scheduleNotificationTask);
        await registerTask(TASK_NAME);
    }
}