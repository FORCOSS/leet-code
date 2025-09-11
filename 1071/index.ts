function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const len: number = gcd(str1.length, str2.length);
    return str1.slice(0, len);
};

function gcd(first: number, second: number): number {
    while (second !== 0) {
        const temp: number = first % second;
        first = second;
        second = temp;
    }
    return first;
}