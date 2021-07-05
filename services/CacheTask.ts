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
  }

  private getDailyPhraseTask = async () => {
    const today = new Date();
    const dbDailyPhrase = await db.getDailyPhrase();

    if (!dbDailyPhrase) {
      await db.removeDailyPhrase();
      await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase)
    }
    else if (dbDailyPhrase.date.toDateString() !== today.toDateString()) {
      await db.removeDailyPhrase();
      await this.fetchAndSet(phraseEndpoint, db.setDailyPhrase)
    }
  }

  private getDailySaints = async () => {
    const today = new Date();
    const dbDailySaints = await db.getDailySaints();
    if (!dbDailySaints) {
      await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      await db.removeDailySaints();
    }
    else if (dbDailySaints.date.toDateString() !== today.toDateString()) {
      await this.fetchAndSet(saintsEndpoint, db.setDailySaints);
      await db.removeDailySaints();
    }
  }

  private cacheTask = async () => {
    const today = new Date();
    console.log(today.toTimeString() + " cacheTask Running")
    await this.getDailyPhraseTask();
    await this.getDailySaints();
  }

  async init() {
    defineTask(TASK_NAME, this.cacheTask);
    await registerTask(TASK_NAME);
  }
}
