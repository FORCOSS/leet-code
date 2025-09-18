function moveZeroes(nums: number[]): void {
    let first: number = 0;
    let second: number = 0;
    while (second < nums.length) {
        if (first <= second) {
            if (nums[second] === 0) {
                second++;
            } else if (nums[first] === 0 && nums[second] !== 0) {
                [nums[first], nums[second]] = [nums[second], nums[first]];
                first++;
            } else {
                first++;
                second++;
            }
        }

    }
};