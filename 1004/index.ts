function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--;
        }

        while (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};