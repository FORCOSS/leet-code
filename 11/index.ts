function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;

        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxArea;
};