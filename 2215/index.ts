function findDifference(nums1: number[], nums2: number[]): number[][] {
    let set1: Set<number> = new Set<number>(nums1);
    let set2: Set<number> = new Set<number>(nums2);

    for (const item of set2) {
        if (set1.has(item)) {
            set1.delete(item);
            set2.delete(item);
        }
    }

    return [[...set1], [...set2]];
};