/* LEET-CODE #235
   
 * Problem: Given a binary search tree (BST), 
   find the lowest common ancestor (LCA) of two given nodes in the BST.

 * The lowest common ancestor is defined between two nodes p and q 
   as the lowest node in T that has both p and q as descendants 
   (where we allow a node to be a descendant of itself).

 * Example 1:
    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
    Output: 6
    Explanation: The LCA of nodes 2 and 8 is 6.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {
    return helper(root, p, q);
}; 

const helper = (root, p, q) => {

    if(!root) return root;
    
    if(p.val < root.val && q.val < root.val) return helper(root.left, p, q)
    else if(p.val > root.val && q.val > root.val) return helper(root.right, p, q);
    else return root;
}