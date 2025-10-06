/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function dfs(root: TreeNode | null) : number[] {
    if (!root) return [];

    if (!root.left && !root.right) {
        return [root.val];
    }

    const nums: number[] = [];
    if (root.left) {
        nums.push(...dfs(root.left));
    }
    if (root.right) {
        nums.push(...dfs(root.right));
    }

    return nums;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const arr1: number[] = dfs(root1);
    const arr2: number[] = dfs(root2);

    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((el, idx) => {
        return el === arr2[idx];
    })
};