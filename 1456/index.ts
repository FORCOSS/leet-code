function maxVowels(s: string, k: number): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCounter: number = 0;
    let maxVowels: number = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            vowelsCounter++;
        }
    }

    maxVowels = vowelsCounter;

    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsCounter++;
            if (vowels.includes(s[i - k])) {
                vowelsCounter--;
            }
        } else {
            if (vowels.includes(s[i - k])) {
                vowelsCounter--;
            }
        }

        maxVowels = Math.max(vowelsCounter, maxVowels);
    }

    return maxVowels;
};