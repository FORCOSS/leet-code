function mergeAlternately(word1: string, word2: string): string {
    let finalStr: string = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (word1[i]) finalStr += word1[i];
        if (word2[i]) finalStr += word2[i];
    }

    return finalStr;
};