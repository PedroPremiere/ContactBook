import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function createdTimeToNow(value: string) {
    dayjs.extend(relativeTime);
    return dayjs(value).fromNow();
}
