function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i - 1 < 0) {
                if (i + 1 < flowerbed.length && flowerbed[i+1] === 0) {
                    flowerbed[i] = 1;
                    n--;
                } else if (flowerbed.length === 1) {
                    flowerbed[i] = 1;
                    n--;
                }
            }
            if (i + 1 >= flowerbed.length) {
                if (i - 1 >= 0 && flowerbed[i-1] === 0)  {
                    flowerbed[i] = 1;
                    n--;
                }
            }
            if (flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n <= 0;
};

/*
Better solution

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === len - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};
 */