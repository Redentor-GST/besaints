import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import scheduleNotification from '../utils/push';
import Database from '../db/db'
import { fetchFromServer } from '../utils/utils';
import { phraseEndpoint, saintsEndpoint } from '../utils/consts';

const db = new Database();
const interval = 1;
const scheduleNotificationTaskName = "ScheduleNotification";
const cacheTaskName = "Cache"

const defineTask = (name: string, callback) => {
  if (TaskManager.isTaskDefined(name)) return;
  TaskManager.defineTask(name, callback);
}

const registerTask = (name: string) => {
  BackgroundFetch.registerTaskAsync(name, {
    minimumInterval: interval,
    stopOnTerminate: false,
    startOnBoot: true,
  })
    .then(() => {
      const today = new Date();
      console.log(today.toTimeString() + " Task " + name + " defined");
    })
    .catch(error => console.log(error));
}

const scheduleNotificationTask = async () => {
  const today = new Date();
  console.log(today.toTimeString() + " " + scheduleNotificationTaskName);
  const dbssn = await db.getShouldSendNotifications();
  if (dbssn) {
    const dbDateTrigger = await db.getDateTrigger();
    dbDateTrigger ?
      scheduleNotification(false, dbDateTrigger.getHours(), dbDateTrigger.getMinutes()) :
      scheduleNotification(false)
  }
}

const getDailyPhraseTask = async () => {
  const today = new Date();
  const dbDailyPhrase = await db.getDailyPhrase();
  if (!dbDailyPhrase) {
    const fetched = await fetchFromServer(phraseEndpoint)
    await db.setDailyPhrase(fetched);
  }
  else if (dbDailyPhrase.date.toDateString() !== today.toDateString()) {
    const fetched = await fetchFromServer(phraseEndpoint)
    await db.setDailyPhrase(fetched);
  }
}

const getDailySaintsTask = async () => {
  const today = new Date();
  const dbDailySaints = await db.getDailySaints();
  if (!dbDailySaints) {
    const fetched = await fetchFromServer(saintsEndpoint)
    await db.setDailySaints(fetched)
  }
  else if (dbDailySaints.date.toDateString() !== today.toDateString()) {
    const fetched = await fetchFromServer(saintsEndpoint)
    await db.setDailySaints(fetched)
  }
}

const cacheTask = async () => {
  const today = new Date();
  console.log(today.toTimeString() + " " + cacheTaskName);
  await getDailyPhraseTask();
  await getDailySaintsTask();
}

defineTask(scheduleNotificationTaskName, scheduleNotificationTask);
defineTask(cacheTaskName, cacheTask);
registerTask(scheduleNotificationTaskName);
registerTask(cacheTaskName);

//We re not using this
/*
function unregister() {
  if (TaskManager.isTaskDefined(TASK_NAME)) {

    BackgroundFetch.unregisterTaskAsync(TASK_NAME)
      .then(() => console.log("Unregistered"))
      .catch(error => console.log(error));
  }
}*/