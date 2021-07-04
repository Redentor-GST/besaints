import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import scheduleNotification from '../utils/push';
import Database from '../db/db'
import { fetchFromServer } from '../utils/utils';
import { phraseEndpoint, saintsEndpoint } from '../utils/consts';

const db = new Database();
const scheduleNotificationTaskName = "ScheduleNotification";
const cacheTaskName = "Cache"
const interval = 5;

function defineTask(name: string, callback) {
  TaskManager.defineTask(name, callback);
  console.log("Task " + name + " defined");
}

async function registerTask(name: string) {
  await BackgroundFetch.registerTaskAsync(name, {
    minimumInterval: interval,
    stopOnTerminate: false,
    startOnBoot: true,
  })
  const today = new Date();
  console.log(today.toTimeString() + " Task " + name + " registered ");
}

async function fetchAndSet(from: string, setter) {
  const dbFetch = await fetchFromServer(from)
  setter(dbFetch);
}

const scheduleNotificationTask = async () => {
  const today = new Date();
  console.log(today.toTimeString() + " scheduleNotificationTask running")
  const dbssn = await db.getShouldSendNotifications();

  if (!dbssn) return;

  const dbDateTrigger = await db.getDateTrigger()
  dbDateTrigger ?
    await scheduleNotification(false, dbDateTrigger.getHours(), dbDateTrigger.getMinutes()) :
    await scheduleNotification(false)
}

const getDailyPhraseTask = async () => {
  const today = new Date();
  const dbDailyPhrase = await db.getDailyPhrase();

  if (!dbDailyPhrase)
    await fetchAndSet(phraseEndpoint, db.setDailyPhrase)
  else if (dbDailyPhrase.date.toDateString() !== today.toDateString())
    await fetchAndSet(phraseEndpoint, db.setDailyPhrase)
}

const getDailySaints = async () => {
  const today = new Date();
  const dbDailySaints = await db.getDailySaints();
  if (!dbDailySaints)
    await fetchAndSet(saintsEndpoint, db.setDailySaints);
  else if (dbDailySaints.date.toDateString() !== today.toDateString())
    await fetchAndSet(saintsEndpoint, db.setDailySaints);
}

const cacheTask = async () => {
  const today = new Date();
  console.log(today.toTimeString() + " cacheTask Running")
  await getDailyPhraseTask();
  await getDailySaints();
}

async function init() {
  defineTask(scheduleNotificationTaskName, scheduleNotificationTask);
  defineTask(cacheTaskName, cacheTask);
  await registerTask(scheduleNotificationTaskName);
  await registerTask(cacheTaskName);
}

init().then(_ => console.log("Init done!"));

//We re not using this
/*
function unregister() {
  if (TaskManager.isTaskDefined(TASK_NAME)) {

    BackgroundFetch.unregisterTaskAsync(TASK_NAME)
      .then(() => console.log("Unregistered"))
      .catch(error => console.log(error));
  }
}*/