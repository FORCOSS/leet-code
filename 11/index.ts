function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;

    while (left < right) {
        let currentHeight = Math.min(height[left], height[right]);
        let currentLength = right - left;
        maxArea = Math.max(maxArea, currentHeight * currentLength);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};