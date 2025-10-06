function pivotIndex(nums: number[]): number {
    let pivot: number = 0;
    let sum: number = 0;
    while (pivot < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i < pivot) {
                sum += nums[i];
            } else if (i > pivot) {
                sum -= nums [i];
            }
        }
        if (sum === 0) {
            return pivot;
        } else {
            sum = 0;
            pivot++;
        }
    }

    return -1;
};

// Better solution (JS)

// var pivotIndex = function(nums) {
//     let totalSum = 0
//     for(let i = 0; i < nums.length; i++) {
//         totalSum += nums[i]
//     }
//     let leftSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (leftSum * 2 == totalSum - nums[i])
//             return i;
//         leftSum += nums[i]
//     }
//     return -1
// };