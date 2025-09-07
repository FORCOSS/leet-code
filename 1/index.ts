function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
};

/* Better solution

function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
    const n: number = nums.length;

    for(let i = 0; i < n; i++) {
        numMap.set(nums[i], i);
    }

    for (let i = 0; i < n; i++) {
        let complement: number = target - nums[i];
        if (numMap.has(complement) && numMap.get(complement) != i) {
            return [i, numMap.get(complement)]
        }
    }
};

 */