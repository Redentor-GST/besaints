import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import Constants from 'expo-constants';

//These arent seconds nor minutes, dont really know what they are
const interval = Constants.isDevice ? 15 : 1;

export function defineTask(name: string, callback) {
    if (TaskManager.isTaskDefined(name)) return;
    TaskManager.defineTask(name, callback);
    const today = new Date();
    console.log(today.toTimeString().slice(0, 8) + " Task " + name + " defined");
}

export async function registerTask(name: string) {
    await BackgroundFetch.registerTaskAsync(name, {
        minimumInterval: interval,
        stopOnTerminate: false,
        startOnBoot: true,
    })
    await BackgroundFetch.setMinimumIntervalAsync(interval);
    const today = new Date();
    console.log(today.toTimeString().slice(0, 8) + " Task " + name + " registered ");
}