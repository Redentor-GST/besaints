import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

const interval = 5;

export function defineTask(name: string, callback) {
    TaskManager.defineTask(name, callback);
    const today = new Date();
    console.log(today.toTimeString() + " Task " + name + " defined");
}

export async function registerTask(name: string) {
    await BackgroundFetch.registerTaskAsync(name, {
        minimumInterval: interval,
        stopOnTerminate: false,
        startOnBoot: true,
    })
    const today = new Date();
    console.log(today.toTimeString() + " Task " + name + " registered ");
}