function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set<string>();
    let left: number = 0;
    let maxLength: number = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength;
};