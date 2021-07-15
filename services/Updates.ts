import * as Updates from 'expo-updates';
import Constants from 'expo-constants';
import { defineTask } from './BackgroundTasksUtils';

export default class UpdateTask {
    updateAppTask = async () => {
        //Cant update on emulators!
        if (!Constants.isDevice) return;
        const now = new Date();
        console.log(now.toTimeString() + " Update Task Running");
        try {
            const areThereUpdates = (await Updates.checkForUpdateAsync()).isAvailable;
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

    async init() {
        defineTask("UpdateTask", this.updateAppTask);
    }
}