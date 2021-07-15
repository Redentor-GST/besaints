import UpdateTask from './Updates';

export async function initTasks() {
    const ut = new UpdateTask();
    await ut.init();
}