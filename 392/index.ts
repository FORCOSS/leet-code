function isSubsequence(s: string, t: string): boolean {
    let first: number = 0;
    let second: number = 0;
    while (first < s.length) {
        if (s[first] !== t[second]) {
            second++;
        } else {
            first++;
            second++;
        }
        if (second > t.length) {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));