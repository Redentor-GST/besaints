import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import sendNotification from '../components/Push'

const TASK_NAME = "ScheduleNotification"

TaskManager.defineTask(TASK_NAME, () => sendNotification())

const dayInMinutes = 24*60;
BackgroundFetch.registerTaskAsync(TASK_NAME,{
    minimumInterval : dayInMinutes,
    stopOnTerminate : false,
    startOnBoot : true,
}).then(() => console.log("Registered"))
.catch(error => console.log(error));


//We should set a flag to know if the user wants to receive notifications
const unregister = () => {
    if (TaskManager.isTaskDefined(TASK_NAME)) 
        BackgroundFetch.unregisterTaskAsync(TASK_NAME)
        .then(() => console.log("Unregistered"))
        .catch(error => console.log(error));
} 

export default {unregister}