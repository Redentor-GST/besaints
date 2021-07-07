import Database from '../db/db'
import { compareTodayvsDate, fetchFromServer } from '../utils/utils';
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
    const dbDailyPhrase = await db.getDailyPhrase();
    console.log("We are now in services/getDailyPhraseTask()");
    console.log("getDailyPhraseTask(): Results from database: ", dbDailyPhrase);
    if (!dbDailyPhrase) {
      await db.removeDailyPhrase();
      const fetched = await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
      console.log("getDailyPhraseTask(): The result was null, so im storing in database what i fetched from server: ", fetched);
    }
    else if (!compareTodayvsDate(dbDailyPhrase.date)) {
      await db.removeDailyPhrase();
      const fetched = await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
      console.log("getDailyPhraseTask(): The date" +
        ") was older than today: (", +
      "), so im storing in database what i fetched from server: ", fetched);
    }
    else
      console.log("getDailyPhraseTask(): All good, we do nothing");
  }

  private getDailySaints = async () => {
    const dbDailySaints = await db.getDailySaints();
    console.log("We are now in services/getDailySaints()")
    console.log("getDailySaints(): Results from database: ", dbDailySaints);
    if (!dbDailySaints) {
      await db.removeDailySaints();
      const fetched = await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      console.log("getDailySaints(): The result was null, so im storing in database what i fetched from server: ", fetched);
    }
    else if (!compareTodayvsDate(dbDailySaints.date)) {
      await db.removeDailySaints();
      const fetched = await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      console.log("getDailySaints(): The date: (", +
        ") was older than today: (", +
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
