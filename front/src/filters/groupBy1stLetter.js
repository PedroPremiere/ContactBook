import { filterByFavorites } from '@/filters/filterByFavorites';

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

export function groupBy1stLetter(arr, favoritesOnly) {
    const filtered = filterByFavorites(arr, favoritesOnly);
    filtered.sort(compare);
    const items = filtered.reduce((store, word) => {
        const letter = word.name.charAt(0);
        const keyStore =
            store[letter] || // Does it exist in the object?
            (store[letter] = []); // If not, create it as an empty array
        keyStore.push(word);
        return store;
    }, {});
    return items;
}
