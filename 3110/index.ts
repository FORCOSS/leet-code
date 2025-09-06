function scoreOfString(s: string): number {
    let symbolsAscii: number[] = [];

    for(const char of s) {
        symbolsAscii.push(char.charCodeAt(0));
    }

    let sum = 0;
    for (let i = 0; i < symbolsAscii.length - 1; i++) {
        sum += Math.abs(symbolsAscii[i] - symbolsAscii[i+1])
    }

    return sum;
};