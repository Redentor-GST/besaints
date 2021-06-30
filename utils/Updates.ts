import * as Updates from 'expo-updates';

try {
    Updates.checkForUpdateAsync()
        .then(update => {
            if (update.isAvailable) {
                Updates.fetchUpdateAsync()
                    .then(_ => {
                        alert("Update Available")
                        Updates.reloadAsync()
                            .then(_ => console.log("Done!"));
                    })
            }
        })
} catch (e) {
    console.error("Error updating: " + e);
}