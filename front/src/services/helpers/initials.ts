export function initials(name: string) {
    const split = name.split(' ');
    const initials = [];
    for (const item of split) {
        initials.push(item[0]);
    }

    return initials.join('');
}
