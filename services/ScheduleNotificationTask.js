import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import sendNotification from '../components/Push'

const TASK_NAME = "ScheduleNotification"

TaskManager.defineTask(TASK_NAME, () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + " Background task running")
    sendNotification(false, 20, 0);
})

const interval = 5;
BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: 1,
    stopOnTerminate: false,
    startOnBoot: true,
})
    .then(() => {
        const _today = new Date();
        const _time = _today.getHours() + ":" + _today.getMinutes() + ":" + _today.getSeconds();
        console.log("Application started at " + _time);
    })
    .catch(error => console.log(error));


//We should set a flag to know if the user wants to receive notifications
export default function unregister() {
    if (TaskManager.isTaskDefined(TASK_NAME)) {

        BackgroundFetch.unregisterTaskAsync(TASK_NAME)
            .then(() => console.log("Unregistered"))
            .catch(error => console.log(error));
    }
}