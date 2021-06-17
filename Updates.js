import * as Updates from 'expo-updates';

try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        alert("Update Available");
        await Updates.reloadAsync();
    }
} catch (e) {
    console.error("Error updating: " + e);
}