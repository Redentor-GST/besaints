import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

//Everywhere says that this are seconds but they are minutes
//15 Because its the minimum interval for IOS
const interval = 1;

export function defineTask(name: string, callback) {
    if (TaskManager.isTaskDefined(name)) return;
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