function productExceptSelf(nums: number[]): number[] {
    let leftProducts: number[] = [];
    let rightProducts: number[] = [];
    let result: number[] = [];

    leftProducts[0] = 1;
    rightProducts[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
};
