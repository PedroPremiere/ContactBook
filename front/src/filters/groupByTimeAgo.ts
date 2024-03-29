import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { filterByFavorites } from '@/filters/filterByFavorites';
import { IContact } from '@/types/contact';

export function groupByTimeAgo(arr: IContact[], favoritesOnly: boolean) {
    const filtered = filterByFavorites(arr, favoritesOnly);
    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat);
    const items = filtered.reduce(
        (store: Record<string, IContact[]>, word: IContact) => {
            const timeAgo = dayjs(word.createDate).format('l');
            const keyStore = store[timeAgo] || (store[timeAgo] = []);
            keyStore.push(word);

            return store;
        },
        {}
    );

    return Object.fromEntries(Object.entries(items).sort().reverse());
}
