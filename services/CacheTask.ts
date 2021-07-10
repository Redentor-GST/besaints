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

    if (!dbDailyPhrase) {
      await db.removeDailyPhrase();
      await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
    }
    else if (!compareTodayvsDate(dbDailyPhrase.date)) {
      await db.removeDailyPhrase();
      await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase);
    }
    else
      console.log("getDailyPhraseTask(): All good, storing nothing");
  }

  private getDailySaintsTask = async () => {
    const dbDailySaints = await db.getDailySaints();

    if (!dbDailySaints) {
      await db.removeDailySaints();
      await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
    }
    else if (!compareTodayvsDate(dbDailySaints.date)) {
      await db.removeDailySaints();
      await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
    }
    else
      console.log("getDailySaintsTask(): all good, storing nothing");
  }

  private cacheTask = async () => {
    const today = new Date();
    console.log(today.toTimeString() + " cacheTask Running")
    await this.getDailyPhraseTask();
    await this.getDailySaintsTask();
  }

  async init() {
    defineTask(TASK_NAME, this.cacheTask);
    await registerTask(TASK_NAME);
  }
}
