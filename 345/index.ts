function reverseVowels(s: string): string {
    const sArray: string[] = [...s];
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let left: number = 0;
    let right: number = s.length - 1;

    while (right > left) {
        if (vowels.includes(sArray[left])) {
            if (vowels.includes(sArray[right])) {
                [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
                left++;
                right--;
            } else {
                right--;
            }
        } else {
            left++;
        }
    }

    s = sArray.join("");
    return s;
};