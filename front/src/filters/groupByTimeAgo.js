import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { filterByFavorites } from '@/filters/filterByFavorites';

export function groupByTimeAgo(arr, favoritesOnly) {
    const filtered = filterByFavorites(arr, favoritesOnly);
    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat);
    const items = filtered.reduce((store, word) => {
        const timeAgo = dayjs(word.createDate).format('l');
        const keyStore = store[timeAgo] || (store[timeAgo] = []);
        keyStore.push(word);

        return store;
    }, {});

    return Object.fromEntries(Object.entries(items).sort().reverse());
}
