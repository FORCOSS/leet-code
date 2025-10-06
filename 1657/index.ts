function closeStrings(word1: string, word2: string): boolean {
    if (word1.length === word2.length) {
        let map1: Map<string, number> = new Map();
        let map2: Map<string, number> = new Map();

        let counter1: number[] = [];
        let counter2: number[] = [];

        for (const char of word1) {
            map1.set(char, (map1.get(char) ?? 0) + 1);
        }

        for (const char of word2) {
            map2.set(char, (map2.get(char) ?? 0) + 1);
        }

        for (const key of map1.keys()) {
            if (!map2.has(key)) {
                return false;
            }
            counter1.push(map1.get(key));
            counter2.push(map2.get(key));
        }

        counter1.sort((a, b) => a - b);
        counter2.sort((a, b) => a - b);

        for (let i = 0; i < counter1.length; i++) {
            if (counter1[i] !== counter2[i]) {
                return false;
            }
        }

        return true;
    } else {
        return false;
    }
};