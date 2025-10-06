function equalPairs(grid: number[][]): number {
    const length: number = grid.length;
    let counter: number = 0;
    let map: Map<string, number> = new Map();

    for (let i = 0; i < length; i++) {
        const key = grid[i].join(',');
        map.set(key, (map.get(key) ?? 0) + 1);
    }

    for (let i = 0; i < length; i++) {
        const arr: number[] = [];
        for (let j = 0; j < length; j++) {
            arr.push(grid[j][i]);
        }
        const key = arr.join(',');
        if (map.get(key)) {
            counter += map.get(key);
        }
    }

    return counter;
};