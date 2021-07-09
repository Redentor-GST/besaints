import ScheduleNotificationTask from './ScheduleNotificationTask';
import CacheTask from './CacheTask';
import UpdateTask from './Updates';

export async function init() {
    const snt = new ScheduleNotificationTask();
    const ct = new CacheTask();
    const ut = new UpdateTask();
    await snt.init();
    await ct.init();
    await ut.init();
}