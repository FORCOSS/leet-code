function reverseWords(s: string): string {
    const words: string[] = s.split(" ");
    let result: string[] = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            result.push(words[i]);
        }
    }

    return result.join(' ');
};