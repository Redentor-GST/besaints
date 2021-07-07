import Database from '../db/db'
import { fetchFromServer } from '../utils/utils';
import { phraseEndpoint, saintsEndpoint } from '../utils/consts';
import { defineTask, registerTask } from './BackgroundTasksUtils';

const db = new Database();
const TASK_NAME = "Cache"

export default class CacheTask {
  private async fetchAndSet(from: string, setter) {
    const dbFetch = await fetchFromServer(from)
    setter(dbFetch);

    //This return is not meant to be here, im just using it for debugging
    return dbFetch;
  }

  private getDailyPhraseTask = async () => {
    const today = new Date();
    const dbDailyPhrase = await db.getDailyPhrase();
    console.log("We are not win services/getDailyPhraseTask()");
    console.log("getDailyPhraseTask(): Results from database: ", dbDailyPhrase);
    if (!dbDailyPhrase) {
      await db.removeDailyPhrase();
      const fetched = await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
      console.log("getDailyPhraseTask(): The result was null, so im storing in database what i fetched from server: ", fetched);
    }
    else if (dbDailyPhrase.date.toDateString() !== today.toDateString()) {
      await db.removeDailyPhrase();
      const fetched = await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
      console.log("getDailyPhraseTask(): The date: (", today.toDateString() +
        ") was older than today: (", today.toDateString() +
      "), so im storing in database what i fetched from server: ", fetched);
    }
    else
      console.log("getDailyPhraseTask(): All good, we do nothing");
  }

  private getDailySaints = async () => {
    const today = new Date();
    const dbDailySaints = await db.getDailySaints();
    console.log("We are now in services/getDailySaints()")
    console.log("getDailySaints(): Results from database: ", dbDailySaints);
    if (!dbDailySaints) {
      await db.removeDailySaints();
      const fetched = await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      console.log("getDailySaints(): The result was null, so im storing in database what i fetched from server: ", fetched);
    }
    else if (dbDailySaints.date.toDateString() !== today.toDateString()) {
      await db.removeDailySaints();
      const fetched = await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      console.log("getDailySaints(): The date: (", today.toDateString() +
        ") was older than today: (", today.toDateString() +
      "), so im storing in database what i fetched from server: ", fetched);
    }
    else
      console.log("getDailySaints(): All good, we do nothing");
  }

  private cacheTask = async () => {
    const today = new Date();
    //console.log(today.toTimeString() + " cacheTask Running")
    console.log(today.toString() + " Cache Task Running");
    await this.getDailyPhraseTask();
    await this.getDailySaints();
  }

  async init() {
    defineTask(TASK_NAME, this.cacheTask);
    await registerTask(TASK_NAME);
  }
}
