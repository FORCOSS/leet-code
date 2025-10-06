function uniqueOccurrences(arr: number[]): boolean {
    let map: Map<number, number> = new Map<number, number>();
    let set: Set<number> = new Set<number>();

    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }

    for (const value of map.values()) {
        set.add(value);
    }

    return set.size === map.size;
};