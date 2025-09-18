function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let left: number = 0;
    let right: number = nums.length - 1;
    let counter: number = 0;

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            counter++;
            left++;
            right--;
        } else if (nums[left] + nums[right] < k) {
            left++;
        } else {
            right--;
        }
    }

    return counter;
};