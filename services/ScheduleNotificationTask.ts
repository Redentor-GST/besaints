import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import scheduleNotification from '../utils/push';
import Database from '../db/db'

const TASK_NAME = "ScheduleNotification"
const db = new Database();

export const invertShouldSendNotifications = async () => {
  const ssn = await db.getShouldSendNotifications();
  db.setShouldSendNotifications(!ssn);
  return !ssn;
}

const defineTask = () => {
  TaskManager.defineTask(TASK_NAME, () => {
    const today = new Date();
    console.log(today.toTimeString() + " Background task running")
    db.getShouldSendNotifications()
      .then(shouldSendNotifications => {
        if (shouldSendNotifications) {
          db.getDateTrigger()
            .then(dateTrigger => {
              dateTrigger ?
                scheduleNotification(false, dateTrigger.getHours(), dateTrigger.getMinutes()) :
                scheduleNotification(false)
            })
        }
      })
  })
}

const registerTask = () => {
  const interval = 5;
  BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: interval,
    stopOnTerminate: false,
    startOnBoot: true,
  })
    .then(() => {
      const today = new Date();
      console.log("Application started at " + today.toTimeString());
    })
    .catch(error => console.log(error));
}

defineTask();
registerTask();

//We re not using this
/*
function unregister() {
  if (TaskManager.isTaskDefined(TASK_NAME)) {

    BackgroundFetch.unregisterTaskAsync(TASK_NAME)
      .then(() => console.log("Unregistered"))
      .catch(error => console.log(error));
  }
}*/