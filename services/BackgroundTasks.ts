import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import scheduleNotification from '../utils/push';
import Database from '../db/db'
import { fetchFromServer } from '../utils/utils';
import { phraseEndpoint, saintsEndpoint } from '../utils/consts';

const TASK_NAME = "ScheduleNotification"
const db = new Database();


const interval = 40;

const defineTask = (name: string, callback) =>
  TaskManager.defineTask(name, callback);

const registerTask = (name: string) => {
  BackgroundFetch.registerTaskAsync(name, {
    minimumInterval: interval,
    stopOnTerminate: false,
    startOnBoot: true,
  })
    .then(() => {
      const today = new Date();
      console.log("Task " + name + " running " + today.toTimeString());
    })
    .catch(error => console.log(error));
}

const scheduleNotificationTask = () => {
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
}

const cacheTask = () => {
  const today = new Date();
  db.getDailyPhrase()
    .then(res => {
      console.log("res: ", res);
      if (!res)
        fetchFromServer(phraseEndpoint)
          .then(phrase => db.setDailyPhrase(phrase)
            .then(_ => console.log("Phrase set")))
      else if (res.date.toDateString() !== today.toDateString())
        fetchFromServer(phraseEndpoint)
          .then(phrase => db.setDailyPhrase(phrase)
            .then(_ => console.log("Phrase set")))
    })
    .catch(e => console.error("Exception in background task: cachetask.getdailyphrase " + e));
  db.getDailySaints()
    .then(dbDailySaints => {
      if (!dbDailySaints)
        fetchFromServer(saintsEndpoint)
          .then(dailySaints => db.setDailySaints(dailySaints)
            .then(_ => console.log("Daily saint set!")))
      else if (dbDailySaints.date.toDateString() !== today.toDateString())
        fetchFromServer(saintsEndpoint)
          .then(dailySaints => db.setDailySaints(dailySaints)
            .then(_ => console.log("Daily saint set!")))
    })
    .catch(e => console.error("Exception in background task: cachetask.getdailysaints " + e));
}

const scheduleNotificationTaskName = "ScheduleNotification";
const cacheTaskName = "Cache"

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