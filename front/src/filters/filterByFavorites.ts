import { IContact } from '@/types/contact';

export function filterByFavorites(
    items: IContact[],
    favoritesOnly: boolean
): IContact[] {
    if (favoritesOnly && items) {
        return items.filter(item => {
            return item.favorite === true;
        });
    }

    return items;
}
