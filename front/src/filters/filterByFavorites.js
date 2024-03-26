export function filterByFavorites(items, favoritesOnly) {
    if (favoritesOnly && items) {
        return items.filter(item => {
            return item.favorite === true;
        });
    }

    return items;
}
