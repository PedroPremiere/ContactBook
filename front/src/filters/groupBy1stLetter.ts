import { filterByFavorites } from '@/filters/filterByFavorites';
import { IContact } from '@/types/contact';

function compare(a: IContact, b: IContact) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

export function groupBy1stLetter(arr: IContact[], favoritesOnly: boolean) {
    const filtered = filterByFavorites(arr, favoritesOnly);
    filtered.sort(compare);
    const items = filtered.reduce(
        (store: Record<string, IContact[]>, word: IContact) => {
            const letter = word.name.charAt(0);
            const keyStore =
                store[letter] || // Does it exist in the object?
                (store[letter] = []); // If not, create it as an empty array
            keyStore.push(word);
            return store;
        },
        {}
    );
    return items;
}
