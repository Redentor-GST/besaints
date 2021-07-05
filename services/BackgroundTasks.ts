import ScheduleNotificationTask from './ScheduleNotificationTask';
import CacheTask from './CacheTask';

export async function init() {
    const snt = new ScheduleNotificationTask();
    const ct = new CacheTask();
    await snt.init();
    await ct.init();
}