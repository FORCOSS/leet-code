function buildArray(nums: number[]): number[] {
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};

/* interesting solution:
function buildArray(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += (1024 * (nums[nums[i]] % 1024));
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] /= 1024;
    }

    return nums;
};
*/