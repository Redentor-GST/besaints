import * as Updates from 'expo-updates';
import { defineTask, registerTask } from './BackgroundTasksUtils';
import Constants from 'expo-constants';

const TASK_NAME = 'UpdateTask';

export default class UpdateTask {
    private updateAppTask = async () => {
        //Cant update on emulators!
        if (!Constants.isDevice) return;
        const now = new Date();
        console.log(now.toTimeString() + " Update Task Running");
        try {
            const areThereUpdates = (await Updates.checkForUpdateAsync()).isAvailable;
            console.log("arethereupdates?: ", areThereUpdates);
            if (areThereUpdates) {
                await Updates.fetchUpdateAsync()
                await Updates.reloadAsync()
            }
        }
        catch (e) {
            //I comment it because is pretty annoying
            //console.warn("Error updating: " + e);
        }
    }

    public async init() {
        defineTask(TASK_NAME, this.updateAppTask);
        await registerTask(TASK_NAME);
    }
}
